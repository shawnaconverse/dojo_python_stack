from flask import flash

from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import collar


class Dog:
    def __init__(self, data):
        # data is a diction that contains all of the data from a row in the database
        # we need an attribute for each field in our table
        self.id = data['id']
        self.name = data['name']
        self.age = data['age']
        self.hair_color = data['hair_color']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.collars = [] # this list will contain collar objects
    

    # in general, a CRUD application needs 5 methods
    # Create has 1 method
    # Read has 2 methods
        # Read Many things
        # Read one thing
    # Update has 1 method
    # Delete has 1 method
    # all of these methods are class methods

    @classmethod
    def create(cls, data):
        # data is a dictionary containing all the data from the form
        query = """
            INSERT INTO dogs (name, age, hair_color, created_at, updated_at)
            VALUES (%(name)s, %(age)s, %(hair_color)s, NOW(), NOW());
        """
        dog_id = connectToMySQL("dogs_schema").query_db(query, data)

        return dog_id


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dogs;"
        results = connectToMySQL("dogs_schema").query_db(query)
        # results is always a list of dictionaries

        all_dogs = []

        for row in results:
            # row is each individual dictionary in the results list
            # cls(row) is instantiaing a Dog object 
            # appending to a our list of dog objects
            all_dogs.append(cls(row))
        
        return all_dogs


    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM dogs LEFT JOIN collars ON dogs.id = collars.dog_id WHERE dogs.id = %(id)s;"
        results = connectToMySQL("dogs_schema").query_db(query, data)
        # results is a list of dictionaries
        # results[0] is the dict at index of 0
        print(results)

        dog = cls(results[0])

        # if there is no collar, the collars.id == None; None == False
        # if there is a collar, then collars.id == some number; == True
        # if results[0]['collars.id'] != None:
        for row in results:
            row_data = {
                "id": row['collars.id'],
                "color": row["color"],
                "created_at": row['collars.created_at'],
                "updated_at": row['collars.updated_at']
            }
            # lowercase collar is the file, pascalcase Collar is the class in that file
            dog.collars.append(collar.Collar(row_data))

        return dog


    @classmethod
    def update(cls, data):
        query = """
            UPDATE dogs SET name = %(name)s, age = %(age)s, hair_color = %(hair_color)s,
            updated_at = NOW() WHERE id = %(id)s;
        """

        connectToMySQL("dogs_schema").query_db(query, data)



    @classmethod
    def delete(cls, data):
        query = "DELETE FROM dogs WHERE id = %(id)s;"
        
        connectToMySQL("dogs_schema").query_db(query, data)


    # we use static because it doesnt need a class reference or an object reference
    # we put in the in the dog class because it validates dogs
    @staticmethod
    def validate(post_data):
        # the purpose of this function is to return True or False
        # post_data: this is the data from request.form
            # post_data is a dictionary: the keys are the form input fields
        is_valid = True # we start with assuming the data is valid

        # we use if statements to check the data
        # if the data isn't valid, we set is_valid = False
        ### the data we get from the form is all strings
        if "name" not in post_data:
            flash("Stop changing my website you person you")
            is_valid = False
        elif len(post_data['name']) < 3:
            # flash messages exist for just one HTTP req/res cycle
            flash("Dog name must be at least 3 characters.")
            is_valid = False
        
        if len(post_data['age']) < 1:
            flash("Dog age must be submitted")
            is_valid = False
        elif not post_data['age'].isnumeric():
                flash("Dog age must be an whole number greater than or equal to 0")
                is_valid = False
        
        if "hair_color" not in post_data:
            flash("Stop changing my website you person you")
            is_valid = False
        elif len(post_data['hair_color']) < 3:
            flash("Dog hair color must be at least 3 characters")
            is_valid = False

        return is_valid

# errors = []
# if len(post_data['name']) < 3:
#     # flash messages exist for just one HTTP req/res cycle
#     errors.append("Dog name must be at least 3 characters.")
    

# if len(post_data['age']) < 1:
#     errors.append("Dog age must be submitted")
    

# if len(post_dat a['hair_color']) < 3:
#     errors.append("Dog hair color must be at least 3 characters")
    
# for error in errors:
#     flash(error)

# if len(errors) > 0:
#     return False
# else:
#     return True