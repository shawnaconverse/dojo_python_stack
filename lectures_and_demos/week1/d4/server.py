from flask import Flask

app = Flask(__name__) # app is a object, or an instance of Flask


# google.com/ => index route
@app.route('/')
def index():
    return "Hello World!"


@app.route("/<spam>")
def spam(spam):
    return "This was the variable: {}".format(spam)


@app.route("/success")
def success():
    return "Success!"


@app.route("/this/is/a/route")
def another_function():
    return "Another String"


@app.route("/<spam>/<spam2>")
def spam2(spam, spam2):
    return "This was the variable: {} {}".format(spam, spam2)


@app.route("/success/<value>")
def yet_another_function(value):
    return "you successfully did a thing with {}".format(value)


@app.route("/<something>/success")
def also_yet_another_function(something):
    return "you successfully did a thing with {}".format(something)



if __name__ == "__main__": # app only runs if we call the server file directly
    app.run(debug = True) # debug mode only should be true when developing

