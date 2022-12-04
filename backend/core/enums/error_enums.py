from enum import Enum

from rest_framework import status


class ErrorEnum(Enum):

    JWT = ({'detail':'Token not valid or expired'}, status.HTTP_403_FORBIDDEN)

    def __init__(self, msg, code):
        self.msg = msg
        self.code = code
