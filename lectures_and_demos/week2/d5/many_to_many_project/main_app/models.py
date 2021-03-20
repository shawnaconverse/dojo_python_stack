from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    # products = 


class Product(models.Model):
    categories = models.ManyToManyField("Category", related_name = "products")
    name = models.CharField(max_length = 255)
    price = models.DecimalField(max_digits = 5, decimal_places = 2)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)