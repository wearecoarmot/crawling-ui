import os

from django.test import TestCase
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
