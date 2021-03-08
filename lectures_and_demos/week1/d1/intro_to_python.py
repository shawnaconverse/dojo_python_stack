# Using Python
# MAC - python3
# Windows - python


# Python Fundamentals

# Variables
name = "Shawn"
number = 42
# variable name & naming conventions
spam_spam_spam_spam_spam_spam_spam_spam_spam_spam_spam_spam_ = "eggs"
dfnadklsfnvadsnfguansngnadsgkluasngnk = "more eggs"
dfnadklsfnvadsnfguansngnadsgkluasngnk = 42
dfnadklsfnvadsnfguansngnadsgkluasngnk = True

full_name = "Shawn Converse"
num = 234817
grilled_cheese_sandwiches = 451


# # Primitive Data Types
# # Strings
# # "Shawn"
# # 'spam'
# # 'The quote of the day is: "I like spam"'
# welcome = "Welcome to Python"
# # # Integer
# # 13
# # 42
# cans_of_spam = 275
# # # Booleans
# # True
# # False
# do_i_have_spam = True
# # # Float - decimal
# # 2.5
# # 4.54843514
# pi = 3.14159

# print(welcome) # => Welcome to Python
# welcome = "This is another message"
# print(welcome)


# # Composite Data Type / Collection / Data Structure
# # Lists
# #  0 indexed
# nums = [0, 1, 2, 3, 4, 5]

# # Dictionaries
# # Key / Value Pairs
# person = {
#     "name": "Shawn",
#     "age": 27,
#     "interests": ["music", "coding", "video games"],
#     "address": {
#         "street": "123 Shawn St",
#         "state": "CA",
#         "city": "San Jose"
#     }
# }

# # Conditionals
# # if 7 > 10:
# #     print("hello")
# # elif 5 > 2:
# #     print("seven")
# # else:
# #     print(7)

# # null => None
# # ! => not
# # || => or
# # && => and
# # === => ==

# x = True
# y = False

# # if x and y:
# #     print("and statement worked")
# # else:
# #     print("and did not work")


# # LOOPS
# # arr = [0,1,2,3]
# # for i in range(len(arr)):
# #     print("hi")

# # while 2 < 5:
# #     print("hello")

# # range(start, stop, step)
# # range(70) # default start is 0
# # range(50, 70) # default step is 1
# # range(50, 70, 5)
# # range(50, 70, 1) # stop is exclusive
# # range(50, 71)

# arr = [0,1,2,3]

# # print(arr[0])
# # print(arr[1])
# # print(arr[2])
# # print(arr[3])
# # for i in range(len(arr)):
# #     print(i)

# # for item in arr:
# #     print(item)

# # for dfnadklsfnvadsnfguansngnadsgkluasngnk in arr:
# #     print(dfnadklsfnvadsnfguansngnadsgkluasngnk)


# person = {
#     "name": "Shawn",
#     "age": 27,
#     "interests": ["music", "coding", "video games"],
#     "address": {
#         "street": "123 Shawn St",
#         "state": "CA",
#         "city": "San Jose"
#     }
# }

# for variable in person:
#     print(person[variable])

# for key, value in person.items():
#     print(f"{key} and {value}")
#     if "interests" == key:
#         for item in value:
#             print(item)


# FUNCTIONS
# block of code
# that we can resuse anywhere -- we can call it

# DEFINE
def sum_two_nums(num1, num2):
    sum = num1 + num2
    # print(sum)
    return sum

# CALL
# sum_two_nums(3, 7)

# PARAMETERS AND ARGUEMENTS
def multiply(spam, baked_beans):
    print(spam)
    print(baked_beans)
    print(spam * baked_beans)

# multiply(5, 8) # these are the arguments
# multiply(8, 5) # these are the arguments

# RETURN VS PRINT
def make_sandwich(ing1, ing2):
    sandwich = ing1 + ing2 + "bread"
    # print(sandwich)
    return sandwich

my_sandwich = make_sandwich("tomato", "bacon")
print(my_sandwich)
print(sum_two_nums(10, sum_two_nums(3, 3)))
print(sum_two_nums(10, 6))
print(16)


