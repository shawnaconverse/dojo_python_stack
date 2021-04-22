from django.db import models

import bcrypt
import datetime
from datetime import datetime
import re

# Create your models here.
class UserManager(models.Manager):
    def registration_validator(self, post_data):
        errors = {}

        # validate name data
        if len(post_data['first_name']) < 2:
            errors['first_name'] = "First name must be at least 2 characters."
        if len(post_data['last_name']) < 2:
            errors['last_name'] = "Last name must be at least 2 characters."
        
        # validate email
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(post_data['email']):    # test whether a field matches the pattern            
            errors['email'] = "Invalid email address!"
        else:
            user_list = User.objects.filter(email = post_data['email'])
            if len(user_list) > 0:
                errors['email'] = "Email is already in use."

        # validate birth date
        if len(post_data['birth_date']) < 1:
            errors['birth_date'] = "You must enter a birth date."
        else:
            form_date = datetime.strptime(post_data['birth_date'], "%Y-%m-%d")
            if datetime.now() < form_date:
                errors["birth_date"] = "You cannot enter a future date for birth date."
            elif datetime.now().year - form_date.year < 13:
                errors["birth_date"] = "You must be older than 13 to register"

        # validate password
        if len(post_data['password']) < 4:
            errors['password'] = "Password must be at least 4 characters."
        if post_data['password'] != post_data['confirm_password']:
            errors['confirm_password'] = "Password and Confirm password must match."

        return errors


    def login_validator(self, post_data):
        errors = {}

        user_list = User.objects.filter(email = post_data['email'])
        if len(user_list) > 0:
            user = user_list[0]
            if not bcrypt.checkpw(post_data['password'].encode(), user.password.encode()):
                errors['password'] = "Invalid Credentials"
        else:
            errors['email'] = "Invalid Credentials"

        return errors


class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    birth_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()

class PartyManager(models.Manager):
    def party_validator(self, post_data):
        errors = {}
        form_date = datetime.strptime(post_data['date'], "%Y-%m-%d")
        if datetime.now() > form_date:
            errors["date"] = "You cannot enter a past date for birth date."
        return errors

class Party(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length = 255)
    party_master = models.ForeignKey(User, related_name='parties', on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
    theme = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = PartyManager()