from django.urls import path, include
from rest_framework.routers import SimpleRouter
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

app_name = 'api'

router = SimpleRouter()
router.register('restaurants', views.RestaurantViewSet, 'restaurants')
router.register('opinions', views.OpinionViewSet, 'opinions')

urlpatterns = [
    path('', include(router.urls)),
]

urlpatterns = format_suffix_patterns(urlpatterns)
