# Generated by Django 2.1.2 on 2019-01-15 00:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_auto_20190115_0035'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='name',
            field=models.CharField(blank=True, default='2019-01-15 00:35:40.072772', editable=False, max_length=100, null=True),
        ),
    ]
