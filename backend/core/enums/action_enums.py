from datetime import timedelta
from enum import Enum


class ActionToken(Enum):
    REFRESH_PASSWORD = ('refresh', timedelta(minutes=30))
    ACTIVATE = ('activate', timedelta(days=1))

    def __init__(self, token_type, exp_time):
        self.token_type = token_type
        self.exp_time = exp_time
