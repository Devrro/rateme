from enum import Enum


class UrlEnums(Enum):
    TELERGRAM_BOT_API_ENUM = 'https://api.telegram.org/bot'

    def __init__(self, url):
        self.url = url
