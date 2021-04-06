# OOP
# Object Oriented Programming

# What is it?
# Programming Paradigm - Style, methodology
# certain style of addressing that data
# We think about the data first


# Why use it?
# 1. Helps to model real life things
# 2. Write DRY code -  dont repeat yourself
# 3. Helps to organize our code
# 4. Helps to modularize our code


# The Hard Way
dog1 = {
    'name': "Vicky",
    "age": 3,
    "hair_color": "brown & white"
}

dog2 = {
    'name': "Shiro",
    "age": 9,
    "hair_color": "white"
}

dog3 = {
    "name": "Bosco",
    "age": 5,
    "hair_color": "brown"
}


# Objects
# Classes
# Template, Blueprint, Model
# we custom make our own data type
# NAMING CONVENTIONS
    # Class names should be
        # Pascal Case - every first word is capitalized
        # Singular
class Dog:
    # The constructor
    def __init__(self, name_param, age_param, hair_color):
        # Attributes
        # The actual data primitives or composites that are contained in an instance of the class
        self.name = name_param
        self.age = age_param
        self.hair_color = hair_color


    # Method - Function  that is part of a class
    def roll_over(self):
        print(f"{self.name} rolled over")
    

    def bark(self):
        print(f"BARK BARK my name is {self.name} BARK BARK")


class Cat:
    def __init__(self, name, age, hair_color):
        self.name = name
        self.age = age
        self.hair_color = hair_color

    
    def meow(self):
        print(f"MEOW MEOW my name is {self.name} MEOW MEOW")


# Class Instantiation - making a new instance of the class - making an object
dog1 = Dog("Vicky", 3, "brown")
dog2 = Dog("Shiro", 9, "white")
dog3 = Dog("Bosco", 5, "brown")
dog4 = Dog("Rufus", 7, "black")
dog4 = Dog("Spot", 7, "black")
dog5 = Dog(1, 1, 1)

# print(dog1.name)
# print(dog2.name)
# print(dog3.name)
# print(dog4.name)
# print(dog5.name)

# dog1.roll_over()
# dog1.bark()
# dog2.roll_over()
# dog2.bark()


# cat1 = Cat("Shelby", 1, "gray")
# print(cat1.name)
# print(cat1.age)
# print(cat1.hair_color)
# cat1.meow()






