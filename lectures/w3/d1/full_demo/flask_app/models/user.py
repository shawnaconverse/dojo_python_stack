from ..config.mysqlconnection import connectToMySQL
from ..models import ice_cream
import re
from flask import flash
from flask_app import app
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app) #instantiating the Bcrypt class passing the flask app

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ice_creams = []
    

    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"

        results = connectToMySQL("full_demo").query_db(query, data)

        if len(results) < 1:
            return False
            
        return cls(results[0])

    
    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM users LEFT JOIN ice_creams ON users.id = ice_creams.user_id WHERE users.id = %(id)s;"

        results = connectToMySQL("full_demo").query_db(query, data)

        user = cls(results[0])
        
        if results[0]['ice_creams.id'] != None:
            for row in results:
                row_data = {
                    "id": row['ice_creams.id'],
                    "flavor": row['flavor'],
                    "topping": row['topping'],
                    "cone": row['cone'],
                    "created_at": row['ice_creams.created_at'],
                    "updated_at": row['ice_creams.updated_at'],
                    "user": user
                }

                user.ice_creams.append(ice_cream.IceCream(row_data))

        return user


    @classmethod
    def create(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) " \
            "VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, NOW(), NOW());"

        return connectToMySQL("full_demo").query_db(query, data)

    
    @staticmethod
    def register_validator(post_data):
        is_valid = True

        if len(post_data['first_name']) < 2:
            flash("First name must be at least 2 characters.")
            is_valid = False
        if len(post_data['last_name']) < 2:
            flash("Last name must be at least 2 characters.")
            is_valid = False

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(post_data['email']):
            flash("Email is in invalid format")
            is_valid = False

        if len(post_data['password']) < 4:
            flash("Password must be at least 4 characters.")
            is_valid = False
        else:
            if post_data['password'] != post_data['confirm_password']:
                flash("Password and Confirm password must match")
                is_valid = False

        return is_valid

    
    @staticmethod
    def login_validator(post_data):
        user_from_db = User.get_by_email({'email': post_data['email']})
        # user_form_db will be None if that email is not in the DB

        if not user_from_db:
            flash("Invalid Credentials.")
            return False

        if not bcrypt.check_password_hash(user_from_db.password, post_data['password']):
            flash("Invalid Credentials")
            return False
        
        return True
    
