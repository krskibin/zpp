from django.urls import path, include
from rest_framework.routers import SimpleRouter
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

app_name = 'forms'

router = SimpleRouter()
router.register('', views.TestViewSet, '')

urlpatterns = [
    path('', include(router.urls)),
]

urlpatterns = format_suffix_patterns(urlpatterns)
