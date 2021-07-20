from flask import flash

from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import user


class IceCream:
    schema = "full_demo"

    def __init__(self, data):
        self.id = data['id']
        # if "user" in data:
        #     self.user = data['user']
        # else:
        #     self.user = user.User.get_by_id({"id": data['user_id']}) # the user object of the creator of the ice cream

        if data['user_id']:
            self.user = user.User.get_by_id({"id": data['user_id']})
        
        self.flavor = data['flavor']
        self.cone = data['cone']
        self.topping = data['topping']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def create(cls, data):
        query = """
            INSERT INTO ice_creams (user_id, flavor, cone, topping, created_at, updated_at) 
            VALUES (%(user_id)s, %(flavor)s, %(cone)s, %(topping)s, NOW(), NOW());
        """

        # this returns the id of the newly created ice cream
        return connectToMySQL(cls.schema).query_db(query, data)


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ice_creams;"
        results = connectToMySQL(cls.schema).query_db(query)

        ice_creams = []
        for row in results:
            ice_creams.append(cls(row))
        
        return ice_creams



    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM ice_creams WHERE id = %(id)s;"
        results = connectToMySQL(cls.schema).query_db(query, data)

        return cls(results[0])


    @classmethod
    def update(cls, data):
        query = """
            UPDATE ice_creams SET flavor = %(flavor)s, cone = %(cone)s, topping = %(topping)s, 
            updated_at = NOW() WHERE id = %(id)s;
        """

        return connectToMySQL(cls.schema).query_db(query, data)


    @classmethod
    def delete(cls, data):
        query = "DELETE FROM ice_creams WHERE id = %(id)s;"

        return connectToMySQL(cls.schema).query_db(query, data)

    
    @staticmethod
    def validate(post_data):
        is_valid = True

        if len(post_data['flavor']) < 2:
            flash("Flavor must be at least 2 characters.")
            is_valid = False

        if len(post_data['cone']) < 2:
            flash("Cone must be at least 2 characters.")
            is_valid = False

        if len(post_data['topping']) < 2:
            flash("Topping must be at least 2 characters.")
            is_valid = False

        return is_valid

