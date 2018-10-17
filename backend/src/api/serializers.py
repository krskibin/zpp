from rest_framework import serializers

from .models import Test


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        field = '__all__'
