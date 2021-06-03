from flask import Flask, render_template, redirect, request


from mysql_connection import connectToMySQL

app = Flask(__name__)
app.secret_key = "keep it secret, keep it safe."


@app.route("/")
def index():
    return render_template("index.html")


# @app.route('/search')
# def search():
#     query = "SELECT * FROM users WHERE username LIKE %%(username)s;"
#     data = {
#         "username": request.args.get("username") + "%" # allows to get data from url parameters
#     }
#     results = connectToMySQL("ajaxWall").query_db(query, data)
#     print(results)
#     return render_template("success.html", users = results)


@app.route('/search', methods = ["POST"])
def search():
    query = "SELECT * FROM users WHERE username LIKE %%(username)s;"
    data = {
        "username": request.json['username'] + "%" # allows to get data from url parameters
    }
    results = connectToMySQL("ajaxWall").query_db(query, data)
    print(results)
    return render_template("success.html", users = results)


if __name__ == "__main__":
    app.run(debug = True)

