from bs4 import BeautifulSoup
from django.http import HttpRequest, JsonResponse, HttpResponseBadRequest
from requests import get
from rest_framework import status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.settings import api_settings
from selenium import webdriver

from server.config import CHROME_DRIVER_PATH
from server.crawling.exceptions.httpexception import BadRequestException, HttpException, UnAuthorizedException
from server.crawling.models import User
from server.crawling.robot_parser import RobotParser
from server.crawling.utils.hasherspassword import HashersPassword
from server.crawling.utils.resreturner import ResReturner

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


@api_view(['POST'])
def user_login(req: HttpRequest):
    def issue_token(_user):
        payload = jwt_payload_handler(_user)
        return jwt_encode_handler(payload)

    user_id = req.POST.get('user_id')
    password = req.POST.get('password')

    try:
        if not user_id:
            raise BadRequestException('Missing user_id parameter.')
        elif not password:
            raise BadRequestException('Missing password parameter.')

        user = User.objects.get(id=user_id)

        if not HashersPassword.is_matched_password(password, user.password):
            raise UnAuthorizedException('Sign In information does not match.')

        return JsonResponse({
            'token': issue_token(user),
            'name': user.name,
        })
    except HttpException as he:
        return ResReturner.get_res(he.code, he.message)


@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
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
