from flask import render_template, redirect, request, session, flash

from flask_app import app
from ..models.dog import Dog


# CRUD

# Read Many
@app.route("/")
def index():
    dogs = Dog.get_all_dogs()

    return render_template("index.html", all_dogs = dogs)


# Read One
@app.route("/dogs/<int:dog_id>")
def display_dog(dog_id):
    # data = {
    #     "id": dog_id
    # }
    # this_dog = Dog.get_one_dog(data)
    this_dog = Dog.get_one_dog({"id": dog_id})

    return render_template("dog.html", dog = this_dog)


# Create
@app.route("/dogs/new")
def new_dog_form():
    return render_template("new_dog.html")


@app.route("/dogs/create", methods = ["POST"])
def create_dog():
    Dog.create(request.form)

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
    Dog.delete_dog({"id": dog_id})

    return redirect("/")