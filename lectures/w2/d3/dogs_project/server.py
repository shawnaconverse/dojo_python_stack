from flask import Flask, render_template, redirect, request


from mysqlconnection import connectToMySQL


app = Flask(__name__)
app.secret_key = "keep it secret, keep if safe."

# CRUD

# Read Many
@app.route("/")
def index():
    mysql = connectToMySQL("dogs_schema")
    query = "SELECT * FROM dogs;"

    dogs = mysql.query_db(query)
    # print(dogs)

    return render_template("index.html", all_dogs = dogs)


# Read One
@app.route("/dogs/<int:dog_id>")
def display_dog(dog_id):
    mysql = connectToMySQL("dogs_schema")
    query = "SELECT * FROM dogs WHERE id = %(id)s;"
    data = {
        "id": dog_id
    }
    
    dog_list = mysql.query_db(query, data)

    print(dog_list[0])

    return render_template("dog.html", dog = dog_list[0])


# Create
@app.route("/dogs/new")
def new_dog_form():
    return render_template("new_dog.html")


@app.route("/dogs/create", methods = ["POST"])
def create_dog():
    mysql = connectToMySQL("dogs_schema")
    query = "INSERT INTO dogs (name, age, hair_color, created_at, updated_at) " \
        "VALUES (%(name)s, %(age)s, %(hair_color)s, NOW(), NOW());"
    data = {
        "name": request.form['name'],
        "age": request.form['age'],
        "hair_color": request.form['hair_color']
    }

    dog_id = mysql.query_db(query, data)

    return redirect("/")


# Update
@app.route("/dogs/<int:dog_id>/edit")
def edit_dog_form(dog_id):
    mysql = connectToMySQL("dogs_schema")
    query = "SELECT * FROM dogs WHERE id = %(id)s;"
    data = {
        "id": dog_id
    }
    
    dog_list = mysql.query_db(query, data)

    return render_template("edit_dog.html", dog = dog_list[0])


@app.route('/dogs/<int:dog_id>/update', methods = ['POST'])
def update_dog(dog_id):
    mysql = connectToMySQL("dogs_schema")
    query = "UPDATE dogs SET name = %(name)s, age = %(age)s, hair_color = %(hair_color)s, " \
        "updated_at = NOW() WHERE id = %(id)s;"
    data = {
        "name": request.form['name'],
        "age": request.form['age'],
        "hair_color": request.form['hair_color'],
        "id": dog_id
    }

    mysql.query_db(query, data)

    return redirect("/")


# Delete
@app.route("/dogs/<int:dog_id>/delete")
def delete_dog(dog_id):
    mysql = connectToMySQL("dogs_schema")
    query = "DELETE FROM dogs WHERE id = %(id)s;"
    data = {
        "id": dog_id
    }

    mysql.query_db(query, data)

    return redirect("/")


if __name__ == "__main__":
    app.run(debug = True)

