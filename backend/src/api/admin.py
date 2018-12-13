from django.contrib import admin
from .models import (Opinion, Review, Restaurant, Address, Features, Image)

class FeaturesInline(admin.TabularInline):
    model = Features

class ImageInline(admin.TabularInline):
    model = Image
    fields = ["imagefile", "image_tag"]
    readonly_fields = ['image_tag']
    extra = 1
    max_num = 10 #Max images to upload

class AddressAdmin(admin.TabularInline):
    model = Address

class OpinionAdmin(admin.ModelAdmin):
    inlines = [FeaturesInline, ImageInline]

class ReviewAdmin(admin.ModelAdmin):
    pass

class ImageAdmin(admin.ModelAdmin):
     readonly_fields = ['image_tag']

class RestaurantAdmin(admin.ModelAdmin):
    inlines = [AddressAdmin, ImageInline]


admin.site.register(Opinion, OpinionAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Restaurant, RestaurantAdmin)
admin.site.register(Image, ImageAdmin)
#admin.site.register(Address, AddressAdmin)
#admin.site.register(Features, FeaturesAdmin)

