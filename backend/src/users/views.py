from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import AnonymousUser

from rest_framework.permissions import IsAuthenticated
from common.permissions import custom_permissions

from users.serializers import UserSerializer
from users.models import User


class UserInfoView(APIView):
    def get(self, request):
        if isinstance(request.user, AnonymousUser):
            return Response('User not logged in',
                            status=status.HTTP_401_UNAUTHORIZED)

        return Response({
            'email': request.user.email,
            'first_name': request.user.first_name,
            'last_name': request.user.last_name,
            'id': request.user.id
        })


@custom_permissions([IsAuthenticated])
class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
