from flask_app.config.mysqlconnection import connectToMySQL

class Dog:
    def __init__(self, data):
        # data is a dictionary
        self.id = data['id']
        self.name = data['name']
        self.age = data['age']
        self.hair_color = data['hair_color']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    
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
    def create(cls, data):
        query = "INSERT INTO dogs (name, age, hair_color, created_at, updated_at) " \
        "VALUES (%(name)s, %(age)s, %(hair_color)s, NOW(), NOW());"

        dog_id = connectToMySQL("dogs_schema").query_db(query, data)

        return dog_id


    @classmethod
    def delete_dog(cls, data):
        query = "DELETE FROM dogs WHERE id = %(id)s;"
        connectToMySQL("dogs_schema").query_db(query, data)


