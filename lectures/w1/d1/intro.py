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



