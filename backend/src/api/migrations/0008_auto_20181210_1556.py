# Generated by Django 2.1.2 on 2018-12-10 15:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20181210_1556'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='name',
            field=models.CharField(blank=True, default='2018-12-10 15:56:07.152644', editable=False, max_length=100, null=True),
        ),
    ]