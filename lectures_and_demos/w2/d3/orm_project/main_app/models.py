from django.db import models

# Create your models here.
class Dog(models.Model):
    # id = models.IntergerField
    name = models.CharField(max_length = 45)
    num_of_legs = models.IntegerField(default = 4)
    breed = models.CharField(max_length = 45)
    size = models.CharField(max_length = 45)
    hair_color = models.CharField(max_length = 45)
    # favorite_toy = models.CharField(max_length = 65, default = "ball")
    # toys = relationship to the class Toy

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Toy(models.Model):
    name = models.CharField(max_length=255)
    price = models.IntegerField()
    size = models.CharField(max_length=255)
    color = models.CharField(max_length=255)
    squeakability = models.BooleanField()
    durability = models.IntegerField()
    dog = models.ForeignKey(Dog, related_name="toys", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
