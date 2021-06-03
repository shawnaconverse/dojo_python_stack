from ..config.mysqlconnection import connectToMySQL
# from flask_app.config.mysqlconnection import connectToMySQL


from ..models import dog


class Toy:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.dogs = []


    @classmethod
    def create(cls, data):
        query = "INSERT INTO toys (name, created_at, updated_at) " \
            "VALUES (%(name)s, NOW(), NOW());"
        toy_id = connectToMySQL("dogs_schema").query_db(query, data)

        return toy_id


    @classmethod
    def add_dog(cls, data):
        query = "INSERT INTO dogs_has_toys (dog_id, toy_id, created_at, updated_at) " \
            "VALUES (%(dog_id)s, %(toy_id)s, NOW(), NOW());"
        connectToMySQL("dogs_schema").query_db(query, data)


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM toys;"
        results = connectToMySQL("dogs_schema").query_db(query)

        toys = []
        for row in results:
            toys.append(cls(row)) # instantiate a new toy object for each row of data from the DB
        
        return toys


    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM toys LEFT JOIN dogs_has_toys ON toys.id = dogs_has_toys.toy_id " \
            "LEFT JOIN dogs ON dogs.id = dogs_has_toys.dog_id WHERE toys.id = %(id)s;"
        results = connectToMySQL("dogs_schema").query_db(query, data)

        toy = cls(results[0]) # instantiating a toy object

        for row in results: 
            # each row in results is a dog
            data = {
                "id": row['dogs.id'],
                "name": row['dogs.name'],
                "age": row['age'],
                "hair_color": row['hair_color'],
                "created_at": row['dogs.created_at'],
                "updated_at": row['dogs.updated_at']
            }
            toy.dogs.append(dog.Dog(data)) # createing a dog object and appending it to the toy.dogs
        
        return toy

