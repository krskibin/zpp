from rest_framework_jwt.utils import jwt_decode_handler


def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
    }


def jwt_get_payload(request, field=None):
    token = _get_token_from_request_headers(request)
    json = jwt_decode_handler(token)
    return json[field] if field else json


def _get_token_from_request_headers(request):
    return request.META['HTTP_AUTHORIZATION'].split()[1]