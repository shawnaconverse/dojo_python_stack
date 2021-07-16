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


