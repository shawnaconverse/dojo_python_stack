from django.db import models

# Create your models here.
class Dog(models.Model):
    # id = models.IntergerField
    name = models.CharField(max_length = 45)
    num_of_legs = models.IntegerField(default = 4)
    breed = models.CharField(max_length = 45)
    size = models.CharField(max_length = 45)
    hair_color = models.CharField(max_length = 45)
    favorite_toy = models.CharField(max_length = 65, default = "ball")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)



