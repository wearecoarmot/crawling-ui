from rest_framework import serializers

from .models import User, Database, Setting


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class DataBaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Database
        fields = '__all__'


class SettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Setting
        fields = '__all__'
