from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models
from django.contrib.auth.models import UserManager


class User(AbstractBaseUser):
    USERNAME_FIELD = 'id'

    idx = models.BigAutoField(primary_key=True)
    id = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    roles = models.CharField(max_length=1, db_index=True)
    active = models.CharField(max_length=1, db_index=True, default='Y')
    create_date = models.DateTimeField(auto_now_add=True, db_index=True)

    objects = UserManager()


class Database(models.Model):
    idx = models.BigAutoField(primary_key=True)
    user_idx = models.BigIntegerField(db_index=True)
    db_user = models.CharField(max_length=100)
    db_password = models.CharField(max_length=100)
    db_url = models.CharField(max_length=100)
    create_date = models.DateTimeField(auto_now_add=True, db_index=True)


class Setting(models.Model):
    name = models.CharField(max_length=30)
    last_run_time = models.DateTimeField()


class LoggedInToken(models.Model):
    user = models.ForeignKey(User, related_name="token_user", on_delete=models.CASCADE)
    token = models.CharField(max_length=1000)
    timestamp = models.DateTimeField(auto_now=True, db_index=True)
