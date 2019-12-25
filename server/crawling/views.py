from django.http import HttpRequest, HttpResponse


def index(req: HttpRequest) -> HttpResponse:
    """
    :return: index page
    """
    return HttpResponse("Index!")
