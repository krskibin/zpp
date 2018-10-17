from django.contrib import admin
from django.urls import path, include

from rest_framework.schemas import get_schema_view


schema_view = get_schema_view(title="ZPP API")

api_urls = [
    path('', schema_view),
    path('test/', include('api.urls')),
]

urlpatterns = [
    path('api/', include(api_urls)),
    path('admin/', admin.site.urls),
    path('api/user-auth/', include('rest_framework.urls')),
]
