from django.db import models
import uuid

class Reservation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.TextField()
    email = models.TextField()
    phone = models.TextField(blank=True, null=True)
    service = models.TextField()
    message = models.TextField(blank=True, null=True)
    status = models.TextField(default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Reservation by {self.name} for {self.service}"
