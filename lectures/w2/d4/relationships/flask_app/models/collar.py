from ..config.mysqlconnection import connectToMySQL

from ..models import dog

class Collar:
    def __init__(self, data):
        self.id = data['id']
        self.dog = data['dog']
        self.color = data['color']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    

    @classmethod
    def create(cls, data):
        query = "INSERT INTO collars (dog_id, color, created_at, updated_at) " \
            "VALUES (%(dog_id)s, %(color)s, NOW(), NOW());"
        
        # collar_id = connectToMySQL("dogs_schema").query_db(query, data)

        # return collar_id
        return connectToMySQL("dogs_schema").query_db(query, data)


    @classmethod
    def get_one_collar(cls, data):
        query = "SELECT * FROM collars WHERE id = %(id)s;"

        results = connectToMySQL('dogs_schema').query_db(query, data)

        results_data = {
            "id": results[0]['id'],
            "dog": dog.Dog.get_one({'id': results[0]['dog_id']}),
            "color": results[0]['color'],
            "created_at": results[0]['created_at'],
            "updated_at": results[0]['updated_at']
        }


        return Collar(results_data)

