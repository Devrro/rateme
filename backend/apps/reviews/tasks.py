from configs.celery import app
from requests import get as request_get

from core.enums.url_enums import UrlEnums


@app.task
def send_to_telegram(token, chat_id, content):
    answer = request_get(
        url=f"{UrlEnums.TELERGRAM_BOT_API_ENUM.url}{token}/sendMessage?chat_id={chat_id}&text={content}")
    return answer

