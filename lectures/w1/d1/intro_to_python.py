# WHAT IS PYTHON?

# Programming language invented in 1991 by Guido van Rossum
# Dynamic Programming Language
# LIST OF SITES THAT USE PYTHON FOR SOME OR ALL OF BACKEND
    # Youtube, DropBox, Google, Quora, Instagram, Spotify, Reddit, Pinterest

# WHY PYTHON?

# Readability
    # Syntax is close to English
# Libraries
    # Tons of resources and libraries to accomplish many different tasks
# Community
    # Huge community of devs and contributors
# Scope
    # Effective across many project types, scientific computing, data analytics, 
    # machine learning, game creation, web development, TEST AUTOMATION, and more.
# Ease
    # Syntax is simple to learn


# Variables
# something that stores a value, gives us access to it later
# Variables can VARY
dog_name = "Vicky"
cat_name = "Snow"
horse_name = "Bucky"
# Naming convetion
    # The name should describe the data it holds
    # Separate words with underscores in python all lowercase
        # Snake Case

grilled_cheese_sandwiches = "tasty"
HEREISANOTHERVARIABLENAME = "more tasty"
dlkjfhjaslidfhaosdngfadnglashdljashdngfiladhgaxhvasdhfiulasdhfjklahsdfunasdlkfnauksldhfjadshfuashdfjkasduhfasjlkdhfasdhfuahsdljkfhasdfa = "this is getting out of hand"

# print(dog_name)
# dog_name = "Leia"
# print(dog_name)
# dog_name = 492
print(dog_name)
# print(grilled_cheese_sandwiches)
# print(HEREISANOTHERVARIABLENAME)
# print(dlkjfhjaslidfhaosdngfadnglashdljashdngfiladhgaxhvasdhfiulasdhfjklahsdfunasdlkfnauksldhfjadshfuashdfjkasduhfasjlkdhfasdhfuahsdljkfhasdfa)

# DATA TYPES
# Primitives

# 1. String
    # Words, letters, characters, numbers, special characters
    # anything inside of the quotes
string = "this is a string"
string = "283491723721"
string = "super$ecretP@ssWoRd!"
string = 'this is a string with single quotes'
string = 'Shawn always says: "Give me pizza!"'
string = "Shawn's favortie dog is Vicky!"
# 2. Integer
    # any whole number
integer = 42
integer = 18
integer = 90
# 3. Float
    # decimals
float_var = 2.5
# 4. Boolean
    # True or False

# Composite Data Types / Collection / Data Structure
# 1. List / in JS is an Array
    # mutable - can change it
    # stores multiple values
    # 0 indexed
some_list = ["vicky", 3, True, [1, 2, 3]]
# 2. Tuples
    # immutable
some_tuple = (1, 2, 3, 4)
# 3. Dictionaries / in JS is an Object
    # Key / Value pairs
    # Keys are strings
dog_dict = {
    "name": "Vicky",
    "age": 3,
    "hair_color": "brown and white"
}


# Conditional
# we use a colon :
# indentation
if dog_name == "Vicky":
    print("Good girl Vicky!")
elif dog_name == "Leia":
    print("Good girl Leia!")
else:
    print("That isnt my dog! but i'm sure he a good boy.")

# >=
# <=
# not / in JS: !
    # if not dog_name == "Vicky":   
# or / in JS: ||
# and / in JS: &&

x = True
y = False

if not x and x:
    print("Sandwiches")
else:
    print("spam and baked beans and eggs")


# Loops


# range(start, stop, step)

# range(10) # sequence of numbers from 0 - 9
# # range(0, 10, 1)
# range(5, 10) # sequence of numbers from 5 - 9
# # range(5, 10, 1)
# range(2, 10, 2) # sequence of numbers from 2 - 8 

for index in range(10):
    print(index)

# arr = [1, 7, 4, 8, 2, 5, 6]

# given_up = False
# while not given_up:
#     print("Never gonna let you down.")

arr = ["string", "hello", "burritos", "tacos", "chimichangas"]
for i in range(len(arr)):
    print(arr[i])

for item in arr:
    print(item)

dog_dict = {
    "name": "Vicky",
    "age": 3,
    "hair_color": "brown and white",
    "is_good_girl": True
}

for key in dog_dict:
    print(key)
    print(dog_dict[key])

for asdjfhaso in dog_dict.values():
    print(asdjfhaso)

for first_variable, second_varaible in dog_dict.items():
    print(f"Key: {first_variable}, Value: {second_varaible}")


print("=" * 50)

# Input and Output

# print(input("How old are you? "))
# age = input("How old are you? ")
# print(type(age))
# months = int(age) * 12
# print(f"You are {months} months old!")


print("=" * 50)
print("=" * 50)

# Random number guessing game
import random

tries = 3

while tries > 0:
    rand_num = random.randint(0, 5)
    guess = int(input("Guess a number between 0 and 10!"))
    if guess == rand_num:
        print("Yay! you won! now leave")
        break
    else:
        print("You are not really good at this are you?")
        print(f"The number was {rand_num}")
        # tries = tries - 1
        tries -= 1

if tries == 0:
    print("Congrats you lost!")
else:
    print("Success!")
