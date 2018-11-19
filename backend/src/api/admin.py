from django.contrib import admin

from .models import (Opinion, Review, Restaurant, Address, Features)

class FeaturesInline(admin.TabularInline):
    model = Features

class AddressAdmin(admin.TabularInline):
    model = Address

class OpinionAdmin(admin.ModelAdmin):
    inlines = [FeaturesInline]

class ReviewAdmin(admin.ModelAdmin):
    pass

class RestaurantAdmin(admin.ModelAdmin):
    inlines = [AddressAdmin]






admin.site.register(Opinion, OpinionAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Restaurant, RestaurantAdmin)
#admin.site.register(Address, AddressAdmin)
#admin.site.register(Features, FeaturesAdmin)

