from flask import Flask, render_template # import the Flask class
app = Flask(__name__)  # creating a new instance of the Flask class

# the '@' decorator associates the route with the following function
@app.route("/") # '/' is the index route
def index():
    return render_template("index.html", first_name = "Jim", last_name = "Reeder")

# path variable / route variable
@app.route("/hello/<name>")
def hello(name):
    return f"Hello there {name}!"


@app.route("/<first_name>/<last_name>")
def hello2(first_name, last_name):
    return render_template("index.html", first_name = first_name, last_name = last_name)


@app.route("/success")
def success():
    return render_template("another.html")


@app.route("/users/<username>/<int:id>")
def show_user(username, id):
    return f"username: {username}, id: {id}"


@app.route("/lists/<color>")
def render_lists(color):
    some_list = [
        {"name": "Vicky", "age": 3, "hair_color": "brown and white", "favorite_toy": "stuffed porcupine"},
        {"name": "Leia", "age": 0, "hair_color": "red and white", "favorite_toy": "anything she can chew"},
        {"name": "Shiro", "age": 9, "hair_color": "white", "favorite_toy": "food"},
        {"name": "Fudge", "age": 16, "hair_color": "black", "favorite_toy": "N/A"}
    ]

    return render_template("dogs.html", dog_names = some_list, color = color)




if __name__ == "__main__":
    app.run(debug = True)

