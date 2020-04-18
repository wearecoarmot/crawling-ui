import os
from json import loads, dumps

from django.test import TestCase

from server.crawling.models import User
from server.crawling.utils.hasherspassword import HashersPassword
from .robot_parser import RobotParser
from .utils.token import TokenUtils


class RobotParserTestCase(TestCase):
    def test_generate(self):
        parser = RobotParser()
        file_lines = []
        with open(f'{os.path.dirname(__file__)}/robots-test.txt', 'r') as robot_file:
            for robot in robot_file:
                file_lines.append(robot)
        parser.parse(''.join(file_lines))
        self.assertEquals(parser.get_allow_urls(), ['/m2', '/my'])
        self.assertEquals(parser.get_disallow_urls(), ['/m', '/me'])


class UserApiTestCase(TestCase):
    def setUp(self):
        User.objects.create(
            name='admin',
            id='admin',
            password=HashersPassword.get_hash_password('admin'),
            roles='A',
        )

    def test_generate(self):
        token = self.login()

        self.get_user_test(token)
        self.create_user_test(token)
        self.update_user_test(token)
        self.delete_user_test(token)

    def get_user_test(self, token):
        res = self.client.get('/api/users/', {}, HTTP_AUTHORIZATION=f'Bearer {token}')
        json_res = loads(res.content.decode('utf-8'))
        self.assertIsNotNone(json_res)

    def create_user_test(self, token):
        res = self.client.post('/api/users/', dumps({
            'user_id': 'user1',
            'password': 'user1',
            'name': 'user1',
        }), HTTP_AUTHORIZATION=f'Bearer {token}', content_type='application/json')
        self.assertEqual(loads(res.content.decode('utf-8'))['message'], 'success')

    def update_user_test(self, token):
        res = self.client.put('/api/users/1/', dumps({
            'name': 'user2',
        }), HTTP_AUTHORIZATION=f'Bearer {token}', content_type='application/json')
        self.assertEqual(loads(res.content.decode('utf-8'))['message'], 'success')

    def delete_user_test(self, token):
        res = self.client.delete('/api/users/1/', HTTP_AUTHORIZATION=f'Bearer {token}')
        self.assertEqual(loads(res.content.decode('utf-8'))['message'], 'success')

    def login(self):
        res = self.client.post('/api/login', dumps({
            'user_id': 'admin',
            'password': 'admin',
        }), content_type="application/json")
        return loads(res.content.decode('utf-8'))['token']


def serialize(dic):
    arr = []
    for key, value in dic.items():
        arr.append(f'{key}={value}')
    return '&'.join(arr)
