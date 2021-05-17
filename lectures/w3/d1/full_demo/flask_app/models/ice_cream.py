from flask import flash


from ..config.mysqlconnection import connectToMySQL
from ..models import user

class IceCream:
    def __init__(self, data):
        self.id = data['id']
        self.flavor = data['flavor']
        self.cone = data['cone']
        self.sprinkles = data['sprinkles']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        if 'user' in data:
            self.user = data['user'] # single user object


    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM ice_creams WHERE id = %(id)s;"
        results = connectToMySQL("full_demo").query_db(query, data)

        results_data = {
            "id": results[0]['id'],
            'flavor': results[0]['flavor'],
            'cone': results[0]['cone'],
            'sprinkles': results[0]['sprinkles'],
            'created_at': results[0]['created_at'],
            'updated_at': results[0]['updated_at'],
            "user": user.User.get_by_id({"id": results[0]['user_id']})
        }

        return cls(results_data)


    @classmethod
    def create(cls, data):
        query = "INSERT INTO ice_creams (user_id, flavor, cone, sprinkles, created_at, updated_at) " \
            "VALUES (%(user_id)s, %(flavor)s, %(cone)s, %(sprinkles)s, NOW(), NOW());"
        ice_cream_id = connectToMySQL("full_demo").query_db(query, data)

        return ice_cream_id


    @classmethod
    def update(cls, data):
        query = "UPDATE ice_creams SET flavor = %(flavor)s, cone = %(cone)s, sprinkles = %(sprinkles)s, updated_at = NOW() WHERE id = %(id)s;"
        ice_cream_id = connectToMySQL("full_demo").query_db(query, data)

        return ice_cream_id

    @classmethod
    def delete(cls, data):
        query = "DELETE FROM ice_creams WHERE id = %(id)s;"
        connectToMySQL("full_demo").query_db(query, data)

    
    @staticmethod
    def validator(post_data):
        is_valid = True

        if len(post_data['flavor']) < 2:
            flash("Flavor must be at least 2 characters.")
            is_valid = False

        if len(post_data['cone']) < 2:
            flash("Cone type must be at least 2 characters.")
            is_valid = False

        return is_valid

