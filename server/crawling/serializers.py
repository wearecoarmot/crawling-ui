from .models import CrawlingSetting
from rest_framework import serializers


class CrawlingSettingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CrawlingSetting
        fields = ('name', 'last_run_time')
