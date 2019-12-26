from django.urls import include, path
from django.views.generic import TemplateView
from rest_framework import routers
from .api import CrawlingSettingViewSet

router = routers.DefaultRouter()
router.register(r'crawlingsettings', CrawlingSettingViewSet)

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
    path('manifest.json', TemplateView.as_view(template_name='manifest.json')),
    path('robots.txt', TemplateView.as_view(template_name='robots.txt')),
    path('api/', include(router.urls)),
    # TODO(kuckjwi): favicon.ico, logo192.png, logo512.png 및 assets 폴더 협의 필요. (현재로 써는 url mapping 해놓지 않음)
]
