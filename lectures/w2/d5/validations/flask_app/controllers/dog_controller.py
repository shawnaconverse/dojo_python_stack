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
    this_dog = Dog.get_dog_with_collars_and_toys({"id": dog_id})

    return render_template("dog.html", dog = this_dog)


# Create
@app.route("/dogs/new")
def new_dog_form():
    return render_template("new_dog.html")


@app.route("/dogs/create", methods = ["POST"])
def create_dog():
    # 1. Validated Post Data
    # 2. If invalid data, redirect to the form. also tell the user what they did wrong
    if not Dog.validate_dog(request.form):
        # if data is invalid, then we want to redirec the user to back to the form
        return redirect("/dogs/new")

    # 3. If valid data, then create the dog
    Dog.create(request.form)

    return redirect("/")


# Update
@app.route("/dogs/<int:dog_id>/edit")
def edit_dog_form(dog_id):
    return render_template("edit_dog.html", dog = Dog.get_one_dog({"id": dog_id}))


@app.route('/dogs/<int:dog_id>/update', methods = ['POST'])
def update_dog(dog_id):
    # 1. Validated Post Data
    # 2. If invalid data, redirect to the form. also tell the user what they did wrong
    if not Dog.validate_dog(request.form):
        # if data is invalid, then we want to redirec the user to back to the form
        return redirect(f"/dogs/{dog_id}/edit")
    
    data = {
        "name": request.form['name'],
        "age": request.form['age'],
        "hair_color": request.form['hair_color'],
        "id": dog_id
    }
    Dog.update(data)

    return redirect("/")


# Delete
@app.route("/dogs/<int:dog_id>/delete")
def delete_dog(dog_id):
    Dog.delete_dog({"id": dog_id})

    return redirect("/")
