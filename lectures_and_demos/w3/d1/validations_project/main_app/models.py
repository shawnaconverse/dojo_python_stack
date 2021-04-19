from django.db import models

# Create your models here.
class DogManager(models.Manager):
    def validator(self, post_data):
        errors = {}

        if len(post_data['name']) < 1:
            errors['name'] = "Spam is a wonderful cooking ingredient especially with rice and eggs"
        
        if len(post_data['age']) < 1:
            errors['age'] = "Dog age must be entered"
        elif int(post_data['age']) < 3:
            errors['age'] = "Dog is not old enough to drink"

        return errors


class Dog(models.Model):
    name = models.CharField(max_length = 72)
    age = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = DogManager()

