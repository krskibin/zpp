from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import AnonymousUser

from rest_framework.permissions import IsAuthenticated
from common.permissions import custom_permissions

from users.serializers import UserSerializer, RegistrationSerializer
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


class RegistrationViewSet(APIView):
    serializer_class = RegistrationSerializer
    def post(self, request):
        user = request.data.get('user', {})

        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)



@custom_permissions([IsAuthenticated])
class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
