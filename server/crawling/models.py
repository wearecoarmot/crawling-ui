from django.db import models


class CrawlingSetting(models.Model):
    name = models.CharField(max_length=30)
    last_run_time = models.DateTimeField()
