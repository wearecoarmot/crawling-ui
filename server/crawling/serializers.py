from rest_framework import serializers

from .models import User, CrawlingSetting


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class CrawlingSettingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CrawlingSetting
        fields = ('name', 'last_run_time')
