# Generated by Django 2.1.2 on 2019-01-21 19:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_auto_20190121_1917'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='name',
            field=models.CharField(blank=True, default='2019-01-21 19:17:29.178352', editable=False, max_length=100, null=True),
        ),
    ]
