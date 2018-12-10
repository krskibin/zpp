from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

from rest_framework.schemas import get_schema_view


schema_view = get_schema_view(title="ZPP API")

api_urls = [
    path('', schema_view),
    path('v1/', include('api.urls')),
    path('users/', include('users.urls')),
]

urlpatterns = [
    path('api/', include(api_urls)),
    path('admin/', admin.site.urls),
    path('api/user-auth/', include('rest_framework.urls')),
] + static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)
