from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)


class Product(models.Model):
    name = models.CharField(max_length = 255)
    price = models.DecimalField(decimal_places = 2)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)