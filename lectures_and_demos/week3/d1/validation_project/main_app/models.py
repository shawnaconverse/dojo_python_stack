from django.db import models

# Create your models here.
class DogManager(models.Manager):
    def validator(self, post_data):
        errors = {}
        # All errors are just strings
        # Just need if statements
        if len(post_data['name']) < 2:
            errors['name'] = "Dog name must be greater than 2 characters."
        if len(post_data['hair_length']) < 2:
            errors['hair_length'] = "Hair length must be greater than 2 characters."
        if len(post_data['hair_color']) < 2:
            errors['hair_color'] = "Hair color must be greater than 2 characters."
        
        return errors



class Dog(models.Model):
    name = models.CharField(max_length = 45)
    hair_length = models.CharField(max_length = 45)
    hair_color = models.CharField(max_length = 45)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = DogManager()

# Dog.objects.all()
# Dog.objects.create()
# Dog.objects.validator()