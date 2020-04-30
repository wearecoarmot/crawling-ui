from rest_framework import serializers

from .models import User, Database


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class DataBaseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Database
        fields = '__all__'
