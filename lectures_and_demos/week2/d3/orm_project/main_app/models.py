from django.db import models

# Create your models here.
# Model a class based representation of the database
class Dog(models.Model):
    name = models.CharField(max_length = 45) # string
    size = models.CharField(max_length = 45)
    age = models.IntegerField()
    hair_color = models.CharField(max_length = 45)
    favorite_toy = models.CharField(max_length = 45)
    favorite_treat = models.CharField(max_length = 46, default = "Chicken Jerky")
    # favorite_treat = models.CharField(max_length = 46, null = True)
    leash_length = models.IntegerField(null = True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
