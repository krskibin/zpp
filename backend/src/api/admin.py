from django.contrib import admin

from .models import (Opinion, Review, Restaurant, Address)


class OpinionAdmin(admin.ModelAdmin):
    pass


class ReviewAdmin(admin.ModelAdmin):
    pass


class AddressItemInline(admin.TabularInline):
    model = Address


class RestaurantAdmin(admin.ModelAdmin):
    pass
    #inlines = [AddressItemInline]


class AddressAdmin(admin.ModelAdmin):
    pass


admin.site.register(Opinion, OpinionAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Restaurant, RestaurantAdmin)
admin.site.register(Address, AddressAdmin)
