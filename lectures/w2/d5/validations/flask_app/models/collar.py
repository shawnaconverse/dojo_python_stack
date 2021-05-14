from flask_app.config.mysqlconnection import connectToMySQL

class Collar:
    def __init__(self, data):
        self.id = data['id']
        self.dog_id = data['dog_id']
        self.color = data['color']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def create(cls, data):
        query = "INSERT INTO collars (dog_id, color, created_at, updated_at) " \
            "VALUES (%(dog_id)s, %(color)s, NOW(), NOW());"
        
        # INSERT Query - return to us the ID of the new record we created
        collar_id = connectToMySQL("dogs_schema").query_db(query, data)

        return collar_id

