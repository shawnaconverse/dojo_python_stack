from flask_app.config.mysqlconnection import connectToMySQL

from flask_app.models import dog

class Toy:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at  = data['created_at']
        self.updated_at = data['updated_at']
        self.dogs = []
    
    
    @classmethod
    def create(cls, data):
        # returns the id of the newly created toy
        query = """
            INSERT INTO toys (name, created_at, updated_at) 
            VALUES (%(name)s, NOW(), NOW());
        """

        return connectToMySQL("dogs_schema").query_db(query, data)


    @classmethod
    def get_all(cls):
        # returns a list of toy objects
        query = "SELECT * FROM toys;"
        results = connectToMySQL("dogs_schema").query_db(query)

        all_toys = []
        for row in results:
            all_toys.append(cls(row))
        
        return all_toys

    @classmethod
    def get_one(cls, data):
        # returns a single toy object
        query = """
            SELECT * FROM toys 
            LEFT JOIN dogs_has_toys ON toys.id = dogs_has_toys.toy_id
            LEFT JOIN dogs ON dogs.id = dogs_has_toys.dog_id
            WHERE toys.id = %(id)s;
        """
        results = connectToMySQL("dogs_schema").query_db(query, data)

        toy = cls(results[0])

        if results[0]['dogs.id'] != None:
            for row in results:
                row_data = {
                    "id": row['dogs.id'],
                    "name": row['dogs.name'],
                    "age": row['age'],
                    'hair_color': row['hair_color'],
                    'created_at': row['dogs.created_at'],
                    'updated_at': row['dogs.updated_at']
                }
                toy.dogs.append(dog.Dog(row_data))
        
        return toy


    @classmethod
    def update(cls, data):
        # returns nothing
        pass


    @classmethod
    def delete(cls, data):
        # returns nothing
        pass
    

    @classmethod
    def add_dog(cls, data):
        query = """
            INSERT INTO dogs_has_toys (dog_id, toy_id, created_at, updated_at) 
            VALUES (%(dog_id)s, %(toy_id)s, NOW(), NOW());
        """

        return connectToMySQL("dogs_schema").query_db(query, data)


    @classmethod
    def remove_dog(cls, data):
        query = "DELETE FROM dogs_has_toys WHERE dog_id = %(dog_id)s AND toy_id = %(toy_id)s;"
        
        return connectToMySQL("dogs_schema").query_db(query, data)

