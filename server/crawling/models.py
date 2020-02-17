from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models
from django.contrib.auth.models import UserManager


class CrawlingSetting(models.Model):
    name = models.CharField(max_length=30)
    last_run_time = models.DateTimeField()


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


class DataBaseSetting(models.Model):
    pass
