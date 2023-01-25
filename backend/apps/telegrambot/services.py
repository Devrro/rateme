import asyncio
import logging
import os

import telegram
from configs.celery import app
from telegram import Update
from telegram.ext import (
    ApplicationBuilder,
    CallbackContext,
    CommandHandler,
    ContextTypes,
    MessageHandler,
    PrefixHandler,
    filters,
)

from apps.telegrambot.models import TelegramTokenKey

API_TOKEN = os.environ.get('TELEGRAM_BOT_API_KEY')
#
telegram_bot_instance = telegram.Bot(token=API_TOKEN)

logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)




def user_reg(user_code, chat_id, user_nickname) -> None:

    """
    Save telegram`s chat id to user
    :param user_nickname: Users telegram nickname
    :param user_code: User id in base
    :param chat_id: Telegram`s chat id
    :return:
    """

    telegram_user = TelegramTokenKey.objects.filter(token_key=user_code).first()
    if telegram_user:
        telegram_user.is_active = True
        telegram_user.user_chat_id = chat_id
        telegram_user.telegram_user_nickname = user_nickname

        telegram_user.save()


@app.task(name='telegram_bot_task')
def telegram_bot():

    application = ApplicationBuilder().bot(telegram_bot_instance).build()
    # application.pool_timeout(10.0)
    # application = application.build()
    async def register_telegram_rateme_key(update: Update, context: CallbackContext):
        user_code = update.effective_message.text.split(' ', )[-1]
        chat_id = update.effective_chat.id
        user_nickname = update.effective_chat.username

        loop = asyncio.get_event_loop()
        await loop.run_in_executor(None,user_reg,user_code,chat_id,user_nickname)

    async def unknown(update: Update, context: CallbackContext):
        await context.bot.send_message(chat_id=update.effective_chat.id, text='Unknown command')

    async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
        await context.bot.send_message(chat_id=update.effective_chat.id,
                                       text="To start working with me provide your telegram key")

    # echo_handler = MessageHandler(filters.TEXT & (~filters.COMMAND), register_code_user)

    # Handlers
    register_user_handler = PrefixHandler(['#'], 'code', register_telegram_rateme_key)
    unknown_handler = MessageHandler(filters.COMMAND, unknown)
    start_handler = CommandHandler('start', start)

    # Adding handlers
    application.add_handler(start_handler)
    application.add_handler(register_user_handler)
    application.add_handler(unknown_handler)

    while not application.running:
        application.run_polling()
