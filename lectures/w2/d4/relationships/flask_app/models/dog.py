from flask_app.config.mysqlconnection import connectToMySQL

from ..models.collar import Collar
from ..models import toy

class Dog:
    def __init__(self, data):
        # data is a dictionary
        self.id = data['id']
        self.name = data['name']
        self.age = data['age']
        self.hair_color = data['hair_color']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.collars = []
        self.toys = []

    
    @classmethod
    def get_all_dogs(cls):
        query = "SELECT * FROM dogs;"
        dogs_from_db = connectToMySQL("dogs_schema").query_db(query)

        dogs = [] # list of dog objects
        for dog in dogs_from_db:
            # cls refers to the class -- cls() == Dog()
            # instantiating a new Dog object for each dictionary in the list
            dogs.append(cls(dog)) 
        
        return dogs


    @classmethod
    def get_one_dog(cls, data):
        query = "SELECT * FROM dogs WHERE id = %(id)s;"
        results = connectToMySQL("dogs_schema").query_db(query, data)

        dog_obj = cls(results[0])

        return dog_obj
    

    @classmethod
    def get_dog_with_collars(cls, data):
        query = "SELECT * FROM dogs LEFT JOIN collars ON dogs.id = collars.dog_id " \
            "WHERE dogs.id = %(id)s;"
        results = connectToMySQL("dogs_schema").query_db(query, data)

        dog = cls(results[0])

        for row in results:
            data = {
                "id": row['collars.id'],
                "dog_id": row['dog_id'],
                "color": row['color'],
                "created_at": row['collars.created_at'],
                "updated_at": row['collars.updated_at']
            }
            dog.collars.append(Collar(data)) # created a Collar object

        return dog

    
    @classmethod
    def get_dog_with_collars_and_toys(cls, data):
        query = "SELECT * FROM dogs LEFT JOIN dogs_has_toys ON dogs.id = dogs_has_toys.dog_id " \
            "LEFT JOIN toys ON toys.id = dogs_has_toys.toy_id WHERE dogs.id = %(id)s;"
        results = connectToMySQL("dogs_schema").query_db(query, data)
        dog_with_collars = cls.get_dog_with_collars(data)
        return_dog = cls(results[0])

        return_dog.collars = dog_with_collars.collars
        for row in results:
            data = {
                "id": row['toys.id'],
                "name": row['toys.name'],
                "created_at": row['toys.created_at'],
                "updated_at": row['toys.updated_at']
            }
            return_dog.toys.append(toy.Toy(data))
        
        return return_dog

    @classmethod
    def create(cls, data):
        query = "INSERT INTO dogs (name, age, hair_color, created_at, updated_at) " \
        "VALUES (%(name)s, %(age)s, %(hair_color)s, NOW(), NOW());"

        dog_id = connectToMySQL("dogs_schema").query_db(query, data)

        return dog_id


    @classmethod
    def delete_dog(cls, data):
        query = "DELETE FROM dogs WHERE id = %(id)s;"
        connectToMySQL("dogs_schema").query_db(query, data)

    
    @classmethod
    def update(cls, data):
        query = "UPDATE dogs SET name = %(name)s, age = %(age)s, hair_color = %(hair_color)s, " \
            "updated_at = NOW() WHERE id = %(id)s;"

        dog_id = connectToMySQL("dogs_schema").query_db(query, data)

        return dog_id

