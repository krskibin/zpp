from rest_framework import viewsets

from .models import Restaurant, Review, Address, Opinion, Image
from .serializers import RestaurantSerializer, ReviewSerializer, AddressSerializer, OpinionSerializer, ImageSerializer


class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class OpinionViewSet(viewsets.ModelViewSet):
    queryset = Opinion.objects.all()
    serializer_class = OpinionSerializer

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

# from django.shortcuts import render
# from .forms import ImageForm
#
#
# def showimage(request):
#     lastimage = Image.objects.last()
#
#     imagefile = lastimage.imagefile
#
#     form = ImageForm(request.POST or None, request.FILES or None)
#     if form.is_valid():
#         form.save()
#
#     context = {'imagefile': imagefile,
#                'form': form
#                }
#
#     return render(request, 'Blog/images.html', context)