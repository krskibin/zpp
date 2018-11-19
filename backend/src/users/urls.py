from django.urls import path, include
from rest_framework.routers import SimpleRouter
from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token

from users import views

app_name = 'users'

router = SimpleRouter()

urlpatterns = [
    path('token-auth/', obtain_jwt_token, name='obtain_jwt'),
    path('token-verify/', verify_jwt_token, name='verify_token'),
    path('auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('user-info/', views.UserInfoView.as_view(), name='user-info'),
    path('', include(router.urls)),
]
