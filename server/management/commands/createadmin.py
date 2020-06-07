from django.core.management.base import BaseCommand
from server.crawling.models import User
from server.crawling.utils.hasherspassword import HashersPassword
from django.core.exceptions import ObjectDoesNotExist


class Command(BaseCommand):
    help = 'Create admin user.'

    def handle(self, *args, **options):
        try:
            if User.objects.get(id='admin'):
                print('admin account exists.')
        except ObjectDoesNotExist:
            admin_user = User(
                id='admin',
                password=HashersPassword.get_hash_password('admin'),
                name='admin',
                roles='A',
                active='Y'
            )
            admin_user.save()
