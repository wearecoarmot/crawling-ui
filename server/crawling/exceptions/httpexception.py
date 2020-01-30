from rest_framework import status


class HttpException(Exception):
    """
    Http root exception.
    """
    pass


class BadRequestException(HttpException):
    """
    Http 400(Bad Request) exception.
    """
    def __init__(self, message):
        self.message = message
        self.code = status.HTTP_400_BAD_REQUEST


class UnAuthorizedException(HttpException):
    """
    Http 401(Unauthorized) exception.
    """
    def __init__(self, message):
        self.message = message
        self.code = status.HTTP_401_UNAUTHORIZED
