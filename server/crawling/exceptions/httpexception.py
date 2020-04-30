from rest_framework import status


class HttpException(Exception):
    """
    Http root exception.
    """
    code = 500
    message = 'Internal Server Error'


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


class ConflictException(HttpException):
    """
    Http 409(Conflict) exception.
    """
    def __init__(self, message):
        self.message = message
        self.code = status.HTTP_409_CONFLICT


class ForbiddenException(HttpException):
    """
    Http 403 (Forbidden) exception.
    """
    def __init__(self, message):
        self.message = message
        self.code = status.HTTP_403_FORBIDDEN
