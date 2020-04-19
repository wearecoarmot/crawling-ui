import json

from bs4 import BeautifulSoup
from django.http import HttpRequest, JsonResponse, HttpResponseBadRequest
from requests import get
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from selenium import webdriver

from server.config import CHROME_DRIVER_PATH
from server.crawling.exceptions.httpexception import (
    HttpException, UnAuthorizedException
)
from server.crawling.extensions.authentication import CustomJSONWebTokenAuthentication
from server.crawling.extensions.generics import get_or_empty
from server.crawling.extensions.httpresponseextension import HttpResponseMoveTemporarily
from server.crawling.models import User, LoggedInToken
from server.crawling.robot_parser import RobotParser
from server.crawling.utils.hasherspassword import HashersPassword
from server.crawling.utils.resreturner import ResReturner
from server.crawling.utils.token import TokenUtils
from server.crawling.utils.validator import Validator


@api_view(['POST'])
def user_login(req: HttpRequest):
    login_fail_msg = 'Sign In information does not match.'
    try:
        body = json.loads(req.body)

        Validator.param_validator(body, ['user_id', 'password'])

        user = User.objects.get(id=body.get('user_id'))

        if not HashersPassword.is_matched_password(body.get('password'), user.password):
            raise UnAuthorizedException(login_fail_msg)

        if user.active == 'N':
            raise UnAuthorizedException('This user is inactive.')

        logged = get_or_empty(LoggedInToken.objects.get_queryset(), user=user)
        token = TokenUtils.issue_token(user)

        if not logged:
            LoggedInToken.objects.create(user=user, token=token)
        else:
            logged.token = token
            logged.save()

        return JsonResponse({
            'token': token,
            'name': user.name,
        })
    except HttpException as he:
        return ResReturner.get_res(he.code, he.message)
    except User.DoesNotExist:
        return ResReturner.get_res(status.HTTP_401_UNAUTHORIZED, login_fail_msg)


@api_view(['POST'])
@authentication_classes([CustomJSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def logout(req):
    logged = get_or_empty(LoggedInToken.objects.get_queryset(), user=req.user)
    logged.delete()
    res = HttpResponseMoveTemporarily()
    protocol = 'https://' if req.is_secure() else 'http://'
    res['Location'] = f'{protocol}{req.get_host()}/api/login'
    return res


@api_view(['GET'])
@authentication_classes([CustomJSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def is_possible_crawling(req: HttpRequest):
    # TODO(kuckjwi): subdomain scan.
    # TODO(kuckjwi): url valid check.
    url = req.GET.get('url')

    if not url:
        return HttpResponseBadRequest('Missing url parameter.')

    robot = get(f'{url}/robots.txt')

    if robot.status_code == status.HTTP_404_NOT_FOUND:
        return JsonResponse({
            'message': 'Robots file not found',
            'content':  '',
        })

    parser = RobotParser()
    parser.parse(robot.content.decode('utf-8'))

    if not('*' in parser.get_allow_urls()):
        return JsonResponse({
            'message': 'Not allow crawling',
            'content': '',
        })

    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument('disable-gpu')

    with webdriver.Chrome(CHROME_DRIVER_PATH, chrome_options=options) as driver:
        driver.implicitly_wait(3)
        driver.get(url)
        soup = BeautifulSoup(driver.page_source, 'lxml')
        body_tag = soup.find('body')
        script_tag = body_tag.find_all('script')
        for tag in script_tag:
            tag.extract()

    return JsonResponse({
        'message': 'success',
        'content': body_tag.prettify(),
    })
