from flask import Flask, render_template, redirect, request
from dog import Dog

app = Flask(__name__)
app.secret_key = "keep it secret, keep it safe"


@app.route("/")
def index():
    return render_template("index.html", all_dogs = Dog.get_all())


@app.route("/dogs/new")
def new_dog():
    return render_template("new_dog.html")


@app.route("/dogs/create", methods = ['POST'])
def create_dog():
    # print(request.form)
    Dog.create(request.form)

    return redirect("/")


@app.route('/dogs/<int:dog_id>')
def display_dog(dog_id):
    return render_template("dog.html", dog = Dog.get_one({"id": dog_id}))


if __name__ == "__main__":
    app.run(debug = True)

