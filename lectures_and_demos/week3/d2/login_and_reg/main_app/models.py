from django.db import models

import re


# Create your models here.
class UserManager(models.Manager):
    def register_validator(self, post_data):
        errors = {}

        if len(post_data['first_name']) < 2:
            errors['first_name'] = "First name must be more than 2 characters."
        if len(post_data['last_name']) < 2:
            errors['last_name'] = "Last name must be more than 2 characters."

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(post_data['email']):
            errors['email'] = "Invalid Email Address."
        
        # if 'birth_date' not in post_data:
        #     errors['birth_date'] = "Must enter a birth date."

        if len(post_data['birth_date']) < 2:
            errors['birth_date'] = "Mbust enter a birth date."

        if len(post_data['password']) < 4:
            errors['password'] = "Passwords must be at least 4 characters long."

        if post_data['password'] != post_data['confirm_password']:
            errors['confirm_password'] = "Password and Confirm Password must match."

        return errors


class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    birth_date = models.DateTimeField()
    password = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()



