from rest_framework.response import Response
from rest_framework.views import exception_handler

from ..enums.error_enums import ErrorEnum


def rateme_exception_handler(exc: Exception, content) -> Response:
    handlers = {
        'JwtException': _jwt_validation_error
    }

    response = exception_handler(exc, content)
    exc_class = exc.__class__.__name__

    if exc_class in handlers:
        func = handlers[exc_class]
        return func(exc, content)
    return response


def _jwt_validation_error(exc: Exception, content: dict) -> Response:
    return Response(ErrorEnum.JWT.code,status=ErrorEnum.JWT.code)
