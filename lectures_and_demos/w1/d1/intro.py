# Very first python program to ever write
# print("Hello There")

# Variable
# What is a variable
    # something that has a value
    # placeholder for data
    # Varies = it can changed
name = "Shawn"
print(name)
name = "Tyler"
print(name)
# Naming Conventions
grilled_cheese_sandwiches = "Yummy"
i_really_love_tacos = "also yummy"
isThisAValidVariable = "yes"
adfsgladfnslvnsdvdsvkadsnvkasndvlunsdvkagjhacxnjkxdnvkzsdhgs = "yes"
# Variable names are 100% arbitrary
print(adfsgladfnslvnsdvdsvkadsnvkasndvlunsdvkagjhacxnjkxdnvkzsdhgs)
# Naming Conventions
# snake case
    # all lower case with underscores
# the variable name should describe the data it holds
first_name = "shawn"
last_name = "converse"
grilled_cheese_sandwiches = "Yummy" # This is not a good variable name
age = 27
sandwich_type = "grilled cheese"


# Data Types
# Primitives
# String - Text characters
# "Shawn's"
# "Vicky"
# "gray"
# "pizza"
# 'iphone'
# picture = 'counsin'
# quote = 'Obi-wan says, "Hello There"'
# # integer (int)
# 1
# 256
# 947000
# # float (decimals)
# 2.5
# 6.75
# 3.1415
# # boolean 
# True
# False

# # Composite - Collection, Data Structure
# # These data types hold other data
# # Lists - array
# # 0 index based 
# l = []
# #             0           1       2   3 - 0     1
some_list = ["list", "more_data", 45, ["shawn", 27]]
# some_list[1]
# some_list[0]
# some_list[4] = "hello" - does not work!
print(some_list)
some_list.append("hello")
print(some_list[3][1])

# Tuple - immutable list

# Dictionary
# Unordered -NonIndexed
# Key - Value Pairs
# ALL KEYS ARE STRINGS
some_dict = {
    "name": "Shawn Converse",
    "age": 27,
    "address": {
        "street": "123 Shawn St",
        "city": "San Jose",
        "state": "CA"
    },
    "interests": ["food", "coding", "video games"]
}
print(some_dict["name"])
some_dict['address']['street']
some_dict["interests"][1]

some_dict['age'] = 27

if "shirt_color" in some_dict:
    print("yay")
else:
    print("add a shirt color")

some_key = "age"

some_dict[some_key]
some_dict.some_key



# Conditionals
# A condition always resolves to a boolean
# <
# >
# == # this is the same as === in JS
# !=
# None # in JS we have null
# not # !
# or # ||
# and # &&


# # IF STATEMENTS
# if age > 13:
#     print("You are old enough")
# elif age > 2:
#     print("You are quite young")
# else:
#     print("How are you using a computer")


# String Interpolation
# dynamically making strings using variables

first_name = "Shawn"
last_name = "Converse"
# F-String
# greeting = f"Hello there {first_name} {last_name}" # greet someone dynamicaly
# print(greeting)
# first_name = "Tyler"
# last_name = "Thibault"
# greeting = "Hello There {} {}".format(first_name, last_name)
# print(greeting)

# num = 45
# print("Age: " + str(num))
# print("Age:", num)
# str_num = "word"
# print(type(int(str_num)))

# Loops
# Block of code that repeats

# For Loop
# when we have a finite number of iterations
# when we know how long we want to loop
# range() function takes 3 arguments
# start, stop, increment
    # start - inclusive 
    # stop - exclusive we go up to but do not include 
    # increment - what are the steps each iteration
# for i in range(101):
#     print(i, end=" ")
# for i in range(0, 101):
#     print(i, end=" ")
# for i in range(25, 101, 5):
#     print(i, end=" ")

dogs = ["vicky", "shiro", "fudge", "bosco", "rover"]

# for i in range(len(dogs)):
#     print(dogs[i])

# for dog in dogs:
#     print(dog)

# # While Loop
# # condition
# while i < 100:
#     print(i)
#     i += 1

# while True:
#     print("Vicky is a good girl")



# function
# is a block of code - set of instructions
# Define
def sum_two_nums(a, b):
    print(a)
    print(b)
    c = a + b
    print(c)

def multiply(spam, eggs):
    print(spam)
    print(eggs)
    baked_beans = spam * eggs
    print(baked_beans)

def user_registration():
    # do some logic for adding new user to the database
    pass

def pet_dog():
    pass
    # 100,000 code

# Call
print("=" * 70 )

a = 42
b = 56
# c = a + b
# print(c)
# PARAMETERS AND ARGUMENTS
# parameter is a variable which a function expects a value 
# argument is the specifc data we want the function to use
sum_two_nums(a, b)
sum_two_nums(3, 5)

a = 14
b = 73
# c = a + b
# print(c)

f = 46548
q = 2
# c = a + b
# print(c)
sum_two_nums(q, f)
multiply(q, f)
