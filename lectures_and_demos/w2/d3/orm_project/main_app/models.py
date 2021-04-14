from django.db import models

# Create your models here.
class Dog(models.Model):
    # id = models.IntergerField
    name = models.CharField(max_length = 45)
    num_of_legs = models.IntegerField()
    breed = models.CharField(max_length = 45)
    size = models.CharField(max_length = 45)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)



