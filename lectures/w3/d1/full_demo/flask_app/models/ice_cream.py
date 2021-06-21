from flask import flash

from ..config.mysqlconnection import connectToMySQL
from ..models import user


class IceCream:
    def __init__(self, data):
        self.id = data['id']
        self.flavor = data['flavor']
        self.topping = data['topping']
        self.cone = data['cone']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user = data['user'] # we are expecting a user object, not just the id

    
    @classmethod
    def get_all(cls):
        pass


    @classmethod
    def get_one(cls, data):
        query = "SELECT * from ice_creams WHERE id = %(id)s;"

        results = connectToMySQL("full_demo").query_db(query, data)

        row_data = {
            "id": results[0]['id'],
            "flavor": results[0]['flavor'],
            "topping": results[0]['topping'],
            "cone": results[0]['cone'],
            "created_at": results[0]['created_at'],
            "updated_at": results[0]['updated_at'],
            "user": user.User.get_by_id({"id": results[0]['user_id']})
        }

        return cls(row_data)

    @classmethod
    def create(cls, data):
        query = "INSERT INTO ice_creams (user_id, flavor, topping, cone, created_at, updated_at) " \
            "VALUES (%(user_id)s, %(flavor)s, %(topping)s, %(cone)s, NOW(), NOW());"
        
        return connectToMySQL("full_demo").query_db(query, data)


    @classmethod
    def update(cls, data):
        pass


    @classmethod
    def delete(cls, data):
        query = "DELETE FROM ice_creams WHERE id = %(id)s;"

        return connectToMySQL("full_demo").query_db(query, data)


    @staticmethod
    def validate(post_data):
        is_valid = True

        if len(post_data['flavor']) < 3:
            flash("Flavor must be at least 3 characters.")
            is_valid = False
        
        if len(post_data['topping']) < 3:
            flash("Topping must be at least 3 characters.")
            is_valid = False

        if len(post_data['cone']) < 3:
            flash("Cone must be at least 3 characters.")
            is_valid = False

        return is_valid

