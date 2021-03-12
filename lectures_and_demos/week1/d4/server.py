from flask import Flask, render_template

app = Flask(__name__) # app is a object, or an instance of Flask


# google.com/ => index route
# @app.route('/')
# def index():
#     return "Hello World!"


# @app.route("/<spam>")
# def spam(spam):
#     return "This was the variable: {}".format(spam)


# @app.route("/success")
# def success():
#     return "Success!"


# @app.route("/this/is/a/route")
# def another_function():
#     return "Another String"


# @app.route("/<spam>/<spam2>")
# def spam2(spam, spam2):
#     return "This was the variable: {} {}".format(spam, spam2)


# @app.route("/success/<value>")
# def yet_another_function(value):
#     return "you successfully did a thing with {}".format(value)


# @app.route("/<something>/success")
# def also_yet_another_function(something):
#     return "you successfully did a thing with {}".format(something)


@app.route("/")
def index():
    dogs = ["Vicky", "Shiro", "Fudge", "Spot", "Princess Fluffball", "Shadow", "Belle"]
    return render_template("index.html", dogs = dogs)

# /red
@app.route("/<color>")
def change_color(color):
    return render_template("color.html", chosen_color = color)


@app.route("/<word>/<color>")
def colorful_word(word, color):
    return render_template("word.html", word = word, color = color)


if __name__ == "__main__": # app only runs if we call the server file directly
    app.run(debug = True) # debug mode only should be true when developing

