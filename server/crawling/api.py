from django.http import JsonResponse, QueryDict
from rest_framework import viewsets
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from server.crawling.exceptions.httpexception import HttpException, ConflictException, ForbiddenException
from server.crawling.utils.hasherspassword import HashersPassword
from server.crawling.utils.resreturner import ResReturner
from server.crawling.utils.token import TokenUtils
from server.crawling.utils.validator import Validator
from .models import User, CrawlingSetting
from .serializers import UserSerializer, CrawlingSettingSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    User api
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [JSONWebTokenAuthentication]
    permission_classes = [IsAuthenticated]

    @staticmethod
    def check_permission_or_raise(token: str, pk=None):
        decoded_token = TokenUtils.decode_token(token.split(' ')[1])
        auth_user = get_object_or_404(UserViewSet.queryset, id=decoded_token['id'])
        if pk:
            target_user = get_object_or_404(UserViewSet.queryset, pk=pk)
            if auth_user.roles != 'A' and auth_user.id != target_user.id:
                raise ForbiddenException(''''You don't have permission.''')
        elif not pk and auth_user.roles != 'A':
            raise ForbiddenException(''''You don't have permission.''')

    def create(self, req, *args, **kwargs):
        try:
            UserViewSet.check_permission_or_raise(req.headers['Authorization'])
            body = QueryDict(req.body)
            Validator.param_validator(body, ['user_id', 'password', 'name'])
            user_id = body.get('user_id')
            password = body.get('password')
            name = body.get('name')
            try:
                if User.objects.get(id=user_id):
                    raise ConflictException(f'{user_id} is not available. (already exists)')
            except User.objects.model.DoesNotExist:
                pass
            user = User(
                id=user_id,
                password=HashersPassword.get_hash_password(password),
                name=name,
                roles='B',
            )
            user.save()
            return JsonResponse({
                'message': 'success',
            })
        except HttpException as he:
            return ResReturner.get_res(he.code, he.message)

    def update(self, req, pk=None):
        try:
            UserViewSet.check_permission_or_raise(req.headers['Authorization'], pk)
            body = QueryDict(req.body)
            Validator.param_validator(body, ['name'])
            user = get_object_or_404(self.get_queryset(), pk=pk)
            if password := body.get('password'):
                user.password = HashersPassword.get_hash_password(password)
            user.name = body.get('name')
            user.save()
            return JsonResponse({
                'message': 'success',
            })
        except HttpException as he:
            return ResReturner.get_res(he.code, he.message)

    def destroy(self, req, pk=None):
        try:
            UserViewSet.check_permission_or_raise(req.headers['Authorization'], pk)
            user = get_object_or_404(self.get_queryset(), pk=pk)
            user.delete()
            return JsonResponse({
                'message': 'success',
            })
        except HttpException as he:
            return ResReturner.get_res(he.code, he.message)

    def list(self, req, *args, **kwargs):
        try:
            UserViewSet.check_permission_or_raise(req.headers['Authorization'])
            serializer = UserSerializer(self.get_queryset(), context={
                'request': req,
            },  many=True)
            return Response(serializer.data)
        except HttpException as he:
            return ResReturner.get_res(he.code, he.message)

    def retrieve(self, req, pk=None):
        try:
            UserViewSet.check_permission_or_raise(req.headers['Authorization'], pk)
            user = get_object_or_404(self.get_queryset(), pk=pk)
            serializer = UserSerializer(user, context={
                'request': req,
            })
            return Response(serializer.data)
        except HttpException as he:
            return ResReturner.get_res(he.code, he.message)


class CrawlingSettingViewSet(viewsets.ModelViewSet):
    """
    Crawling Setting api
    """
    queryset = CrawlingSetting.objects.all()
    serializer_class = CrawlingSettingSerializer
