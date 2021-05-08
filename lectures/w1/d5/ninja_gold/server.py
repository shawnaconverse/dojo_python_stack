from flask import Flask, render_template, redirect, session, request
import random


app = Flask(__name__)
app.secret_key = "keep it secret, keep it safe."


@app.route("/")
def index():
    if "gold" not in session:
        session['gold'] = 0
        session['activities'] = []

    return render_template("index.html")


@app.route("/process_money", methods = ['POST'])
def process_money():
    if request.form['location'] == "farm":
        gold = random.randint(10, 20)
        session['gold'] += gold
        session['activities'].append(f"Earned {gold} gold at the farm!")

    elif request.form['location'] == "cave":
        gold = random.randint(5, 10)
        session['gold'] += gold
        session['activities'].append(f"Earned {gold} gold at the cave!")

    elif request.form['location'] == "house":
        gold = random.randint(2, 5)
        session['gold'] += gold
        session['activities'].append(f"Earned {gold} gold at the house!")

    elif request.form['location'] == "casino":
        gold = random.randint(-50, 50)
        session['gold'] += gold
        if gold > 0:
            session['activities'].append(f"Earned {gold} gold at the casino!")
        else:
            session['activities'].append(f"Lost {gold} gold at the casino!")

    return redirect("/")


@app.route('/destroy')
def reset():
    session.clear()

    return redirect('/')


if __name__ == "__main__":
    app.run(debug = True)

