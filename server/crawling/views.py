from server.config import CHROME_DRIVER_PATH
from django.views.decorators.http import require_http_methods
from rest_framework import status
from django.http import HttpRequest, JsonResponse
from selenium import webdriver
from bs4 import BeautifulSoup
from .robot_parser import RobotParser
from requests import get


@require_http_methods(['GET'])
def is_possible_crawling(req: HttpRequest) -> JsonResponse:
    # TODO(kuckjwi): subdomain scan.
    # TODO(kuckjwi): url valid check.
    url = req.GET.get('url')

    if not url:
        return JsonResponse({
            'message': 'Missing url parameter.',
            'content': '',
        })

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
    options.add_argument("disable-gpu")

    with webdriver.Chrome(CHROME_DRIVER_PATH, chrome_options=options) as driver:
        driver.implicitly_wait(3)
        driver.get(url)
        soup = BeautifulSoup(driver.page_source, 'lxml')
        body_tag = soup.find('body')
        script_tag = body_tag.find_all('script')
        for tag in script_tag:
            tag.extract()

    return JsonResponse({
        'message': 'Success',
        'content': body_tag.prettify(),
    })
