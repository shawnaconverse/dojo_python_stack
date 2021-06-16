from flask import Flask, render_template, request, session, redirect

from dog import Dog


app = Flask(__name__)
app.secret_key = "keep it secret, keep it safe."


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
    Dog.create(request.form)

    return redirect("/")

if __name__ == "__main__":
    app.run(debug = True)

