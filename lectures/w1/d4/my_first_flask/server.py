from flask import Flask, render_template


app = Flask(__name__)


# @app.route("/") # index route
# def index():
#     return "Hello there!"


# @app.route("/success")
# def success():
#     return "HURRAY! you were successful!"


# @app.route("/hello/<something>") # path varaible
# def say_hello(something):
#     return f"Hello! the variable says {something}"


# @app.route("/hello/<int:num>")
# def say_more_hellos(num):
#     return "Hello!" * num


# @app.route("/hello/<name>/<int:age>")
# def greet(name, age):
#     return f"Hello {name}! you are {age} years old!"


@app.route("/")
def index():
    return render_template("index.html", phrase = "Howdydo?", times = 5)


if __name__ == "__main__":
    app.run(debug = True)

