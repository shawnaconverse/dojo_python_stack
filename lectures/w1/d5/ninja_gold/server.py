from flask import Flask, render_template, request, session, redirect
import random

app = Flask(__name__)
app.secret_key = "keep it secret, keep it safe."


@app.route("/")
def index():
    if "gold" not in session:
        session['gold'] = 0
        session['activities'] = []
    
    print(session['activities'])
    return render_template("index.html")


@app.route("/process_money", methods = ['POST'])
def process_money():
    print(request.form['which_form'])
    if request.form['which_form'] == 'farm':
        gold_amt = random.randint(10, 20)
        session['gold'] += gold_amt
        session['activities'].append(f"<p class='earned'>Earned {gold_amt} gold at the farm</p>")

    elif request.form['which_form'] == 'cave':
        gold_amt = random.randint(5, 10)
        session['gold'] += gold_amt
        session['activities'].append(f"<p class='earned'>Earned {gold_amt} gold at the cave</p>")

    elif request.form['which_form'] == 'house':
        gold_amt = random.randint(2, 5)
        session['gold'] += gold_amt
        session['activities'].append(f"<p class='earned'>Earned {gold_amt} gold at the house</p>")

    elif request.form['which_form'] == 'casino':
        gold_amt = random.randint(-50, 50)
        session['gold'] += gold_amt
        if gold_amt > 0:
            session['activities'].append(f"<p class='earned'>Earned {gold_amt} gold at the casino</p>")
        else:
            session['activities'].append(f"<p class='lost'>Lost {gold_amt} gold at the casino</p>")


    return redirect("/")


@app.route("/reset")
def reset():
    session.clear()

    return redirect("/")


if __name__ == "__main__":
    app.run(debug = True)

