"""
Permission wrapper

Usage:
# in view.py
from rest_framework.permissions import IsAuthenticated
from common.permissions import custom_permissions

@custom_permissions([IsAuthenticated])
class UserInfoView(APIView):
    pass

"""


def custom_permissions_method(permission_classes):
    def wrapper(func):
        def wrapped(self, *f_args, **f_kwargs):
            custom_perms = []
            class_perms = []
            for perm in permission_classes:
                if isinstance(perm, str):
                    custom_perms.append(perm)
                else:
                    class_perms.append(perm)
            self.check_custom_permissions(f_args[0], custom_perms)
            self.check_permissions(f_args[0], class_perms)
            return func(self, *f_args, **f_kwargs)
        return wrapped
    return wrapper


def custom_permissions(permission_classes):
    def decorator(func):
        custom_perms = []
        class_perms = []
        for perm in permission_classes:
            if isinstance(perm, str):
                custom_perms.append(perm)
            else:
                class_perms.append(perm)
        func.permission_classes = class_perms
        func.custom_perms = custom_perms
        return func
    return decorator
