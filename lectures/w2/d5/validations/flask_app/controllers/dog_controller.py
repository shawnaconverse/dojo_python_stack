from flask import render_template, request, session, redirect

from flask_app import app
from ..models.dog import Dog


@app.route("/")
def index():
    bananas = Dog.get_all_dogs()

    return render_template("index.html", all_dogs = bananas)


@app.route("/dogs/new")
def new_dog_form():
    return render_template("new_dog.html")


@app.route("/dogs/create", methods = ["POST"])
def create_dog():
    print(request.form)

    if not Dog.validate_dog(request.form):
        return redirect('/dogs/new')

    Dog.create(request.form)

    return redirect("/")


@app.route("/dogs/<int:dog_id>")
def show_dog(dog_id):
    bananas = Dog.get_one({'id': dog_id})

    return render_template("show_dog.html", dog = bananas)


@app.route("/dogs/<int:dog_id>/delete")
def delete_dog(dog_id):
    Dog.delete({'id': dog_id})

    return redirect("/")


@app.route("/dogs/<int:dog_id>/edit")
def edit_dog_form(dog_id):
    return render_template("edit_dog.html", dog = Dog.get_one({'id': dog_id}))


@app.route("/dogs/<int:dog_id>/update", methods = ['POST'])
def update_dog(dog_id):
    if not Dog.validate_dog(request.form):
        return redirect(f'/dogs/{dog_id}/edit')

    data = {
        "name": request.form['name'],
        "age": request.form['age'],
        "hair_color": request.form['hair_color'],
        "id": dog_id
    }
    Dog.update(data)

    return redirect(f"/dogs/{dog_id}")


