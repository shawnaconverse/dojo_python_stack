from flask import render_template, request, session, redirect

from flask_app import app
from ..models.dog import Dog
from ..models.toy import Toy


@app.route("/toys")
def all_toys():
    return render_template("toys.html", all_toys = Toy.get_all())


@app.route("/toys/create", methods = ['POST'])
def create_toy():
    Toy.create(request.form)

    return redirect("/toys")


@app.route("/toys/<int:toy_id>")
def show_toy(toy_id):
    return render_template(
        "show_toy.html",
        toy = Toy.get_one({"id": toy_id}),
        all_dogs = Dog.get_all_dogs()
    )


@app.route("/toys/<int:toy_id>/add_dog", methods = ["POST"])
def add_dog(toy_id):
    data = {
        "toy_id": toy_id,
        "dog_id": request.form['dog_id']
    }
    Toy.add_dog(data)

    return redirect(f"/toys/{toy_id}")


@app.route('/toys/<int:toy_id>/<int:dog_id>/remove_dog')
def remove_dog(toy_id, dog_id):
    data = {
        "toy_id": toy_id,
        "dog_id": dog_id
    }
    Toy.remove_dog(data)

    return redirect(f"/toys/{toy_id}")
