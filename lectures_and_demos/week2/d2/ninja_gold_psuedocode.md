# Ninja Gold PsuedoCode

## HTML

- ONLY ONE HTML FILE IS NEEDED
```html
<input type="hidden" name="which_form" value="farm">
<input type="hidden" name="which_form" value="cave">
<input type="hidden" name="which_form" value="house">
<input type="hidden" name="which_form" value="casino">
```
- Display the amount of gold `{{request.session.gold}}`
- Activity log
  - List of strings
  - Use a for loop `{% for something in request.session.activity %}`
  - the timestamp is not required (but a fun bonus)


---
## urls.py

1. `path("", views.index)` -> render the HTML
2. `path("process_money", views.process_money)` -> determine the amount of gold to add/subtract


---
## views.py

```py
import random

def index(request):
    # if gold is not in session, then initialize
    # if activity is not in session, then also initialize
    if "gold" not in request.session:
        
    context = {}
    return render(request, "index.html", context)


def process_money(request):
    # Determine which form was submitted
    if request.POST["which_form"] == "farm":
        # do farm stuff
        # 1. choose a random amount of gold, for farm is 10-20 gold
        # 2. create our log string to describe what happened
        # 3. add them to session
        request.session['gold'] += random_gold_amount
        request.session['activity'].append(log)
    if request.POST["which_form"] == "cave":
        # do cave stuff
    
    # for minusing gold
    random.randint(-50, 50) # any number bettwen -50 and 50

    return redirect("/")
```
