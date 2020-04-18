import binascii

from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework import exceptions

from server.crawling.utils.token import TokenUtils


class CustomJSONWebTokenAuthentication(JSONWebTokenAuthentication):
    def get_jwt_value(self, request):
        """
        Decryption token.
        :param request: request
        :return: token decryption value
        """
        try:
            tokens = request.headers['Authorization'].split()
            return TokenUtils.decryption_token(tokens[1])
        except binascii.Error as be:
            raise exceptions.AuthenticationFailed(be)
