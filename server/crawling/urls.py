from rest_framework_jwt.views import refresh_jwt_token, verify_jwt_token
from django.urls import include, path
from django.views.generic import TemplateView
from rest_framework import routers
from .api import CrawlingSettingViewSet
from .views import is_possible_crawling, user_login

router = routers.DefaultRouter()
router.register(r'crawling/setting', CrawlingSettingViewSet)

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
    path('manifest.json', TemplateView.as_view(template_name='manifest.json')),
    path('robots.txt', TemplateView.as_view(template_name='robots.txt')),
    path('api/', include(router.urls)),
    path('api/login', user_login),
    path('api/check/url', is_possible_crawling),
    path('api/api-jwt-auth/refresh', refresh_jwt_token),
    path('api/api-jwt-auth/verify', verify_jwt_token)
]
