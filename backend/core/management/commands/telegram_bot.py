from time import sleep

from django.core.management import BaseCommand

from apps.telegrambot.services import telegram_bot


class Command(BaseCommand):
    help = 'Launch telegram bot'

    def handle(self, *args, **options):
        self.stdout.write('Telegram bot initialize')
        telegram_bot_online = False

        while not telegram_bot_online:
            try:
                self.stdout.write('Telegram bot starting')
                telegram_bot.delay()
                telegram_bot_online = True
            except Exception:
                self.stdout.write('Telegram bot restarting...')
                # self.stdout.write(f'{telegram_app.running}')
                sleep(5)
        self.stdout.write('Telegram bot handler is online')
