from flask import flash
from flask_bcrypt import Bcrypt
import re

from flask_app import app
from ..config.mysqlconnection import connectToMySQL


bcrypt = Bcrypt(app)


class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    
    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL("login_schema").query_db(query, data)

        user = cls(results[0])

        return user


    @classmethod
    def create(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) " \
            "VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, NOW(), NOW());"
        user_id = connectToMySQL("login_schema").query_db(query, data)

        return user_id


    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL("login_schema").query_db(query, data)
        # print(results)
        return cls(results[0]) if len(results) > 0 else None


    @staticmethod
    def register_validator(post_data):
        is_valid = True

        if len(post_data['first_name']) < 2:
            flash("First Name must be more than 2 characters.")
            is_valid = False
        
        if len(post_data['last_name']) < 2:
            flash("Last Name must be more than 2 characters.")
            is_valid = False

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
        if not EMAIL_REGEX.match(post_data['email']):
            flash("Invalid email.")
            is_valid = False
        else:
            user = User.get_by_email({"email": post_data['email']})
            if user:
                flash("Email is already in use!")
                is_valid = False

        if len(post_data['password']) < 4:
            flash("Password must be at least 4 characters.")
            is_valid = False
        
        if post_data['password'] != post_data['confirm_password']:
            flash("Password and Confirm Password must match")
            is_valid = False

        return is_valid


    @staticmethod
    def login_validator(post_data):
        user = User.get_by_email({"email": post_data['email']})

        if not user:
            flash("Invalid Credentials")
            return False
        
        if not bcrypt.check_password_hash(user.password, post_data['password']):
            flash("Invalid Credentials")
            return False
        
        return True


