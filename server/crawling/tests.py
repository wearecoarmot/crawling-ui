import os
from json import loads

from django.test import TestCase

from server.crawling.models import User
from server.crawling.utils.hasherspassword import HashersPassword
from .robot_parser import RobotParser


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
        print('get user')
        self.get_user_test(token)
        print('create user')
        self.create_user_test(token)
        print('update user')
        self.update_user_test(token)
        print('delete user')
        self.delete_user_test(token)

    def get_user_test(self, token):
        res = self.client.get('/api/user/', {}, HTTP_AUTHORIZATION=f'Bearer {token}')
        json_res = loads(res.content.decode('utf-8'))
        self.assertIsNotNone(json_res)

    def create_user_test(self, token):
        res = self.client.post('/api/user/', serializer({
            'user_id': 'user1',
            'password': 'user1',
            'name': 'user1',
        }), HTTP_AUTHORIZATION=f'Bearer {token}', content_type='application/x-www-form-urlencoded')
        self.assertEqual(loads(res.content.decode('utf-8'))['message'], 'success')

    def update_user_test(self, token):
        res = self.client.put('/api/user/1/', serializer({
            'name': 'user2',
        }), HTTP_AUTHORIZATION=f'Bearer {token}')
        self.assertEqual(loads(res.content.decode('utf-8'))['message'], 'success')

    def delete_user_test(self, token):
        res = self.client.delete('/api/user/1/', HTTP_AUTHORIZATION=f'Bearer {token}',
                                 content_type='application/x-www-form-urlencoded')
        self.assertEqual(loads(res.content.decode('utf-8'))['message'], 'success')

    def login(self):
        res = self.client.post('/api/login', {
            'user_id': 'admin',
            'password': 'admin',
        })
        return loads(res.content.decode('utf-8'))['token']


def serializer(dic):
    arr = []
    for key, value in dic.items():
        arr.append(f'{key}={value}')
    return '&'.join(arr)
