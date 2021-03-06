from rest_framework import serializers

from .models import Restaurant, Opinion, Address, Image

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('imagefile', )


class RestaurantSerializer(serializers.ModelSerializer):
    image = ImageSerializer(many=True, required=False)
    avg_rating = serializers.ReadOnlyField()
    class Meta:
        model = Restaurant
        fields = '__all__'

class OpinionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Opinion
        read_only_fields = ('date',)
        fields = '__all__'

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'
