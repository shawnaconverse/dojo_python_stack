# # Python

# # What is python
#     # Programming Language
#         # Dynamic
#         # High-Level
#             # Trivia: Python was written in C
#     # invented in 1991 Guido van Rossum
#     # List of websites that use python for some or all of their backend
#         # youtube, dropbox, google, quora, instagram, spotify, reddit, pintrest

# # Why use python
#     # Libraries
#         # tons of resources and functionalities to accomplish different things
#     # Readability
#         # fairly close to english
#     # Open source (free)
#     # Community
#         # TONS of people devs and contributors 
#     # Scope
#         # Python is heavily used in many industries
#         # scientific computing, machine learning, data analytics, 
#         # game creation (pygame), web dev, test automation

# # print("Hello World!")
# # print("Hello World!")
# # print("Hello World!")
# # print("Hello World!")
# # print("Hello World!")


# # def do_something():


# # Variables
#     # container / stores data
#     # vary / reassign data

# hello = "hello there!"

# # What is a valid variable name to the computer
# is_this_a_valid_variable_name = "hello"
# ahsdjfhnasdjfhasasdjfhasdlfhasdlfhasldukhfalksjdhfalsdhfluashdflkjashdflkjashdflkjasdhflukashdfluasydglkjhglkashgasdl = "hello tehre"
# print(ahsdjfhnasdjfhasasdjfhasdlfhasdlfhasldukhfalksjdhfalsdhfluashdflkjashdflkjashdflkjasdhflukashdfluasydglkjhglkashgasdl)

# # - Naming convetions
# # Python naming convetion for variables is: snake case
#     # all lower case
#     # words separated by underscores
# first_name = "Shawn"
# last_name = "Converse"
# age = 28
# # variable names need to describe the data the variable holds
# hot_dog = "Monster Hunter Rise" # bad variable name
# good_game = "Monter Hunter Rise" # good variable name


# # Data Type

# # Primitive Types

# # Integers
# 2345
# # Strings
# "hello's"
# '"there"'
# # Booleans
# True
# False
# # Floats
# 3.5
# 42.8

# # Composite Types / collections / data structures
# # List / the same as JS arrays
#     # 0 indexed / first index is 0
#     # good practice is all data in a list is the same data type
# [23, "hello", True, 3.2, ["this is a list in a list / nested list"]]
# # Tuples
#     # 0 indexed / just like lists
#     # immutable / once made it cannot be changed
# (23, "hello", True, 3.2)
# # Dictionaries / the same as JS objects
#     # Key / Values pairs
#     # ALL KEYS ARE STRINGS
#         # ints can be keys
#         # tuples can be keys
# person1 = {
#     "first_name": "Shawn",
#     "last_name": "Converse",
#     "age": 28,
#     "interests": ["music", "games", "coding", "long walks on the beach"]
# }


# # Conditionals

# if x > y:
#     # do something
# elif y > x:
#     # do something for the elif
# else:
#     # do some default thing



# # Loops

# for hot_dog in range(10):
#     print("hello")


# a = 42
# b = 57
# # c = a + b
# # print(c)

# a = 37
# b = 100
# c = a + b
# print(c)

# c = a + b
# print(c)
def assign_a_and_b():
    a = 4321
    b = -57

# Functions
    # Naming Conventions
        # functions should be snake case
    # ANY TIME YOU SEE SOMETHING FOLLOWED BY () IT IS A FUNCTION
# DEFINE
    # write the code of the function
    # this DOES NOT RUN THE FUNCTION
# Parameters
    # variables that hold the data passed to the function
def add_two_things(a, b):
    print(f"The value of a is {a}")
    print(f"The value of b is {b}")
    c = a + b
    print(c)

# CALL
    # calling will run the function
# add_two_things = 75
# assign_a_and_b()
# Arguments
    # actual data passed to the function
    # arguments are assigned left to right
num1 = 432
num2 = 234
add_two_things(45, 57)
add_two_things(num1, num2)

def make_jelly_beans(sugar, water, coloriung, syrup):
    jelly_beans = "Dem some gud beanz"
    return jelly_beans

make_jelly_beans("white sugar", "dirty pond water", "red coloring", "corn syrup")


# Return vs Print
print("=" * 80)

def multiply_print(spam, baked_beans):
    print("This print is inside of a function: " + str(spam * baked_beans))


def multiply_return(spam, baked_beans):
    # return spam * baked_beans
    return "al pastor tacos"

eggs = multiply_print(5, 7)
print(eggs)
print(multiply_return(5, 5)) # print("al pastor tacos")
# print(eggs)
hot_dog = 46 > 35
print(hot_dog)

# multiply_return()
# multiply_print(5)

# Default Parameters

def greet(name = "", repeat = 2):
    print(f"Good Morning {name}!\n" * repeat)

greet()
greet("Shawn")
greet("Shawn", 5)
# greet(5, "Cody") this crashes
# Named arguments
greet(name = "Cody", repeat = 3)
greet(repeat = 17, name = "Christian")