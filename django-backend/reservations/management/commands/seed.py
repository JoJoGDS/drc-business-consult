from django.core.management.base import BaseCommand
from reservations.models import Reservation

class Command(BaseCommand):
    help = 'Seed the database with initial data'

    def handle(self, *args, **kwargs):
        # Add a sample reservation
        Reservation.objects.create(
            name='Admin User',
            email='admin@example.com',
            phone='1234567890',
            service='Admin Service',
            message='This is a sample reservation.',
            status='confirmed'
        )
        self.stdout.write(self.style.SUCCESS('Database seeded successfully.'))
