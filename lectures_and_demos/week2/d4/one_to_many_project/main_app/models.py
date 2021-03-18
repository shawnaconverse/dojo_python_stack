from django.db import models

# Create your models here.
class Dog(models.Model):
    name = models.CharField(max_length = 45) # string
    size = models.CharField(max_length = 45)
    age = models.IntegerField()
    hair_color = models.CharField(max_length = 45)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)


class Toy(models.Model):
    dog = models.ForeignKey('Dog', related_name = "toys", on_delete = models.CASCADE)
    name = models.CharField(max_length = 45)
    texture = models.CharField(max_length = 45)
    size = models.CharField(max_length = 45)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)