from flask_app.config.mysqlconnection import connectToMySQL

from flask_app.models import dog

class Collar:
    def __init__(self, data):
        self.id = data['id']
        # this needs to be the whole dog object, not just the id
        # self.dog = data['dog']
        if "dog_id" in data:
            self.dog = dog.Dog.get_one({"id": data['dog_id']}) 
        self.color = data['color']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    
    @classmethod
    def create(cls, data):
        query = """
            INSERT INTO collars (dog_id, color, created_at, updated_at) 
            VALUES (%(dog_id)s, %(color)s, NOW(), NOW());
        """
        
        # this query returns the new collar's id
        return connectToMySQL("dogs_schema").query_db(query, data)


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM collars;"
        results = connectToMySQL("dogs_schema").query_db(query)

        collars = []
        for row in results: 
            # row_data = {
            #     "id": row['id'],
            #     "dog": Dog.get_one({"id": row['dog_id']}),
            #     "color": row['color'],
            #     "created_at": row['created_at'],
            #     "updated_at": row['updated_at']
            # }
            # collars.append(cls(row_data))
            collars.append(cls(row))
        
        return collars


    @classmethod
    def get_one(cls, data):
        pass


    @classmethod
    def update(cls, data):
        pass


    @classmethod
    def delete(cls, data):
        pass

