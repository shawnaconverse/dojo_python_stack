from django.db import models

# Create your models here.
class Jedi(models.Model):
    name = models.CharField(max_length = 255)
    light_saber_color = models.CharField(max_length = 45)
    is_master = models.BooleanField()
    age = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    # force_powers = list of force powers


class ForcePower(models.Model):
    # Relationships
    jedis = models.ManyToManyField(Jedi, related_name = "force_powers")
    # Attributes
    name = models.CharField(max_length = 255)
    # Date stamps
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)