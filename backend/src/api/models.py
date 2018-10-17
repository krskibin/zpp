from django.db import models


class Test(models.Model):

    id = models.AutoField(primary_key=True)
    test = models.CharField(max_length=40, default='test')
