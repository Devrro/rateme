from django.core.management import BaseCommand
from django.utils import timezone


class Command(BaseCommand):
    help = 'Display current time'

    def handle(self, *args, **options):
        time = timezone.now().strftime('%X')
        self.stdout.write(f'It`s now {time}')

