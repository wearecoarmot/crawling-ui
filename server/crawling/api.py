from rest_framework import viewsets
from .serializers import CrawlingSettingSerializer
from .models import CrawlingSetting


class CrawlingSettingViewSet(viewsets.ModelViewSet):
    """
    Crawling Setting api
    """
    queryset = CrawlingSetting.objects.all()
    serializer_class = CrawlingSettingSerializer
