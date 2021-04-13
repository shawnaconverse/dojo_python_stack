# Ninja Gold Pseudocode

## HTML FILES

- ONLY NEED **ONE** HTML FILE
  - 4 differe forms
```html
<input type="hidden" name="which_form" value="farm">
<input type="hidden" name="which_form" value="cave">
<input type="hidden" name="which_form" value="house">
<input type="hidden" name="which_form" value="casino">
```
- Display the current amount of gold
  - Where is gold stored? in session `{{ request.session.gold }}`
- Activity Log
  - Where to store activity log? in session
  - `{% for something in request.session.activity %}`

---
## URLS.PY

1. `path("", views.index)` -> Render the HTML page
2. `path("process_money", views.process_money)` -> Determine the amount of gold to add/subtract

---
## VIEWS.PY

```py
import random

def index(request):
    # if 'gold' not in session, then initialize it
    # if 'activity' not in session, then initialize it
    return render(request, "index.html")

def process_money(request):
    if request.POST['which_form'] == 'farm':
        # Choose a random number between 10-20 and add the gold to session
        # Give the user the gold
        # create a log string and append it to actity in session
        string = f"Earned {gold} gold from farm!"
    
    return redirect('/')
```

