from rest_framework import serializers
from users.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=50,
                                     min_length=6,
                                     write_only=True)
    class Meta:
        model = User
        fields = ['email', 'password']

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
