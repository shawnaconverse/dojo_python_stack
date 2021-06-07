print("hello there")

# VARIBABLES
thing = "here is a value"
dog_name = "Vicky"

# Naming Conventions
variable = 123 # yes
is_this_a_valid_variable_name = 1234 # yes
HOWABOUTTHIS_ISTHISAVALIDVARIABLE = 123 # yes
adflkfasdjfnasjdfhaslasdfhnajsdhfasdhfoasdansjsldhfahsdflhasdofnaskljdhfoasdnfhasdjfhasodnfjashdfoasndkljfahsndofu = "General Kenobi" # yes
print(adflkfasdjfnasjdfhaslasdfhnajsdhfasdhfoasdansjsldhfahsdflhasdofnaskljdhfoasdnfhasdjfhasodnfjashdfoasndkljfahsndofu)
# Variable names need to reflect the data they hold
dog_name = "Leia"
last_name = "Converse"
# Syntanx - snake case, underscores and lowercase
this_is_snake_case = "yes it is"




# Data Types
# Primitives - MOST BASIC /FUNDAMENTAL data type
# String -  bunch of characters
var = "This is a string"
var = 'This is also a string'
var = "we cannot mix and match the quotes'"

# Boolean
var = True
var = False

# Integer
var = 42
var = 524000
var = -4

# Float
var = 2.5
var = 3.1415
var = 406.00956

# Composite Data Types / Collections / Data Structure
# List - python's version of an array
    # 0 indexed
some_list = [24, "something", True, [1, 2, 3]]
print(some_list[1])

# Tuple - immutable list
    # 0 indexed
some_tuple = (24, "something", True, [0, 1, 2, 3])
print(some_tuple[3][2])
some_tuple[3].append("soemthing")
print(some_tuple[3])

# Dictionary
    # Key (name) / Value pairs
some_dict = {
    "name": "Vicky", 
    "age": 3, 
    "hair_color": "brown and white and black"
}
print(some_dict["hair_color"])
print(some_dict.get('favorite_toy'))

some_dict['favorite_toy'] = "tennis ball"

print(some_dict.get('favorite_toy'))


# Conditionals
if 45 > 35:
    # CODE BLOCK IS DENOTED BY INDENTATION
    print("hello there")
elif 254 < 350:
    print("general kenobi")
else:
    print("this is an else")

# >
# <
# >=
# !=
# ==  works the same as === in JS
# Logical operators
# IN JS the NOT operator is a !
    # !=
    # !true
# In PYTHON the NOT operator is the word not
    # !=
    # not True
if not False:
    print("this is not false")
# IN JS ||, in PYTHON is or
if 24 == 17 or 24 > 25:
    print('do something')
# IN JS &&, in PYTHON is and
if 24 == 17 and 24 > 25:
    print("do something else")


print("=" * 80)


# Loop
# a repeating code block
# for
dog_names = ["vicky", "leia", "shiro", "fudge", "phylo"]

# range(start, stop, step)
# range(start, stop) # default step is 1
# range(stop) # default start is 0
# for range function, stop is exclusive
for i in range(len(dog_names)):
    print(dog_names[i])

for name in dog_names:
    print(name)


# while
# when we dont know when we need to stop
# condition is not met
num = 0
while num < 10:
    print("bork")
    num += 1

print("=" * 80)

dogs = [
    {"name": "Vicky", "age": 3, "hair_color": "brown and white"},
    {"name": "Leia", "age": 0, "hair_color": "red and white"},
    {"name": "Shiro", "age": 9, "hair_color": "white"},
    {"name": "Fudge", "age": 16, "hair_color": "black"},
    {"name": "phylo", "age": 5, "hair_color": "silver and orange"}
]

print(dogs[1]['age'])

for dog in dogs:
    print(f"Dog name: {dog['name']}")

print()
print()
print("=" * 80)
print()
print()


# Functions

a = 42
b = 56
c = a + b
print(c)


a = 14
b = 73
c = a + b
print(c)


a = 4321
b = -7
c = a + b
print(c)

# Define
def add_two_things(num1, num2):
    sum = num1 + num2
    print(sum)

# Call - Invoke
add_two_things(42, 56)
add_two_things(14, 72)
add_two_things(4321, -7)

print()
print("=" * 80)
print()

def add_two_things2(num1, num2):
    sum = num1 + num2
    return sum

another_var = add_two_things2(35, add_two_things2(7, 12))
print(another_var)
# add_two_things2(35)

# Default Parameters and Named Arguments
def greet(name = "", repeat = 2):
    print(f"Good Morning {name}!\n" * repeat)

greet()
greet("shawn")
greet("shawn", 5)

greet(repeat = 5, name = "shawn")
greet(repeat = 7, name = "Jim")
greet(name = "Jin", repeat = 2)


def make_bank_account(name, int_rate = 0.05, balance = 0):
    pass # do nothing

make_bank_account("1st branch of Converse")
make_bank_account("17th branch of Natan", .1, 10000)






