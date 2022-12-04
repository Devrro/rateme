from time import sleep

from django.core.management import BaseCommand
from django.db import OperationalError
from django.db import connection as con
from django.db.backends.base.base import BaseDatabaseWrapper

connection: BaseDatabaseWrapper = con


class Command(BaseCommand):
    def handle(self, *args, **options):
        self.stdout.write("Scanning for db")
        db_con = False
        while not db_con:
            try:
                connection.ensure_connection()
                db_con = True
            except OperationalError:
                self.stdout.write('Db is not connected.Checking again...1 sec')
                sleep(1)
        self.stdout.write("Db is available now")
