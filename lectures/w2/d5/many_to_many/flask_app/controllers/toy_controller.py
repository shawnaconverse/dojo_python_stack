from flask import render_template, redirect, request
from flask_app import app
from flask_app.models.dog import Dog
from flask_app.models.toy import Toy


@app.route("/toys")
def display_all_toys():
    return render_template("toys/toys.html", all_toys = Toy.get_all())


@app.route("/toys/new")
def new_toy_form():
    return render_template("toys/new_toy.html")


@app.route("/toys/create", methods = ["POST"])
def create_toy():
    Toy.create(request.form)

    return redirect("/toys")


@app.route("/toys/<int:toy_id>")
def display_toy(toy_id):
    return render_template(
        "toys/toy.html",
        toy = Toy.get_one({"id": toy_id}),
        all_dogs = Dog.get_all()
    )


@app.route('/toys/<int:toy_id>/add_dog', methods = ['POST'])
def add_dog(toy_id):
    data = {
        "dog_id": request.form['dog_id'],
        "toy_id": toy_id
    }

    Toy.add_dog(data)

    return redirect(f"/toys/{toy_id}")


@app.route("/toys/<int:toy_id>/<int:dog_id>/remove_dog")
def remove_dog(toy_id, dog_id):
    data = {
        "dog_id": dog_id,
        "toy_id": toy_id
    }
    Toy.remove_dog(data)

    return redirect(f"/toys/{toy_id}")


