from flask import render_template, redirect, request
from flask_app import app
from flask_app.models.dog import Dog
# from ..models.dog import Dog

# displays all dogs
@app.route("/")
def index():
    return render_template("index.html", all_dogs = Dog.get_all())


# displays the form to create a new dog
@app.route("/dogs/new")
def new_dog():
    return render_template("new_dog.html")


# performs the action of creating a new dog
@app.route("/dogs/create", methods = ['POST'])
def create_dog():
    # print(request.form)
    Dog.create(request.form)

    return redirect("/")


# displays a single dog
@app.route('/dogs/<int:dog_id>')
def display_dog(dog_id):
    return render_template("dog.html", dog = Dog.get_one({"id": dog_id}))


# display the page to update a dog
@app.route("/dogs/<int:dog_id>/edit")
def edit_dog_form(dog_id):
    return render_template("edit_dog.html", dog = Dog.get_one({"id": dog_id}))


# perform the action of updating a single dog
@app.route("/dogs/<int:dog_id>/update", methods = ["POST"])
def update_dog(dog_id):
    new_dict = {
        "name": request.form['name'],
        "age": request.form['age'],
        "hair_color": request.form['hair_color'],
        "id": dog_id
    }
    another_dict = {
        **request.form,
        "id": dog_id
    }
    Dog.update(another_dict)

    return redirect("/")


# perform the action of deleting a single dog
@app.route("/dogs/<int:dog_id>/delete")
def delete_dog(dog_id):
    Dog.delete({"id": dog_id})

    return redirect("/")

