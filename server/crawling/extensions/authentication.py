import binascii

from rest_framework import exceptions
from rest_framework.exceptions import NotAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from server.crawling.extensions.generics import get_or_empty
from server.crawling.models import LoggedInToken
from server.crawling.utils.token import TokenUtils


class CustomJSONWebTokenAuthentication(JSONWebTokenAuthentication):
    def authenticate(self, request):
        """
        Custom authenticate.
        :param request: request
        :return: authenticate
        """
        tokens = CustomJSONWebTokenAuthentication.parse_token(request)
        user, jwt_value = super().authenticate(request)
        logged = get_or_empty(LoggedInToken.objects.get_queryset(), token=tokens[1])
        if not logged:
            raise NotAuthenticated('Login information not found.')
        return user, jwt_value

    def get_jwt_value(self, request):
        """
        Decryption token.
        :param request: request
        :return: token decryption value
        """
        try:
            tokens = CustomJSONWebTokenAuthentication.parse_token(request)
            return TokenUtils.decryption_token(tokens[1])
        except binascii.Error as be:
            raise exceptions.AuthenticationFailed(be)

    @staticmethod
    def parse_token(request):
        return request.headers['Authorization'].split()
