from django.http import HttpResponseBadRequest
from rest_framework import status
from server.crawling.extensions.httpresponseextension import (
    HttpResponseUnauthorized, HttpResponseForbidden, HttpResponseConflict
)


RETURNER_DIC = {
    status.HTTP_400_BAD_REQUEST: lambda msg: HttpResponseBadRequest(msg),
    status.HTTP_401_UNAUTHORIZED: lambda msg: HttpResponseUnauthorized(msg),
    status.HTTP_409_CONFLICT: lambda msg: HttpResponseConflict(msg),
    status.HTTP_403_FORBIDDEN: lambda msg: HttpResponseForbidden(msg),
}


class ResReturner:
    @staticmethod
    def get_res(code, msg):
        return RETURNER_DIC[code](msg)
