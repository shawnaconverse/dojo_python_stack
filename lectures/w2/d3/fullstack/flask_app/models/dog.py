from ..config.mysqlconnection import connectToMySQL

class Dog:
    def __init__(self, data):
        # data is a dictionary that holds all of the dog's data
        self.id = data['id']
        self.name = data['name']
        self.age = data['age']
        self.hair_color = data['hair_color']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    

    @classmethod
    def get_all_dogs(cls):
        # 1. write out our mysql query
        query = "SELECT * FROM dogs;"

        # 2. query the database using connectToMySQL function
        results = connectToMySQL("dogs_schema").query_db(query)

        # print(results)
        dogs = []

        # results is a list of dictionaries
        # row is my loop variable that holds each dictionary
        for row in results:
            dogs.append(Dog(row)) # adding Dog objects to the list
        
        print(dogs)
        return dogs


    @classmethod
    def create(cls, data):
        # data = request.form
        # data is a dictionary with all of the POST data from the form
        query = "INSERT INTO dogs (name, age, hair_color, created_at, updated_at) VALUES (%(name)s, %(age)s, %(hair_color)s, NOW(), NOW());"

        dog_id = connectToMySQL("dogs_schema").query_db(query, data)

        print (dog_id)
        return dog_id


    @classmethod
    def get_one(cls, data):
        # data is a dictionary
        query = "SELECT * FROM dogs WHERE id = %(id)s;"

        results = connectToMySQL("dogs_schema").query_db(query, data)

        # print(results)

        return Dog(results[0])


    @classmethod
    def delete(cls, data):
        query = "DELETE FROM dogs WHERE id = %(id)s;"

        connectToMySQL("dogs_schema").query_db(query, data)

        # return True


    @classmethod
    def update(cls, data):
        query = "UPDATE dogs SET name = %(name)s, age = %(age)s, " \
        "hair_color = %(hair_color)s, updated_at = NOW() WHERE id = %(id)s;"

        connectToMySQL("dogs_schema").query_db(query, data)

