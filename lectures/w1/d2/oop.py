# OOP

# Object Oriented Programming
    # PROGRAMMING PARADIGM - PROGRAMMING STYLE
        # also procedural programming and functional programming
        # how we look at, analyze, and break down a problem
    # Efficiency
    # Resuable blocks of code
    # Organization

# An approach where we think about data first
    # we make our own custom data types
    # objects
        # data
        # actions it can perform


# ================================================================================
# The Hard Way

dog1 = {
    "name": "Vicky",
    "age": 3,
    "hair_color": "brown and white"
}

dog2 = {
    "name": "Leia",
    "age": 0,
    "hair_color": "red and white"
}

dog3 = {
    "name": "Shiro",
    "age": 9,
    "hair_color": "white"
}

# ================================================================================
# The Better Way

# class is a blueprint for our own custom data type
class Dog:
    # constructor function
    # dunder init
    def __init__(self, name, age, hair_color):
        # attributes - the actual data stored in the object
        self.name = name
        self.age = age
        self.hair_color = hair_color

    
    # Method - function part of a class
    def sit(self):
        print(f"BORF BORF I sat down. Give me a treat for my name is {self.name}!")

    
    def play_dead(self, other_dog):
        print(f"{self.name} pretends to be dead with {other_dog.name}")
        other_dog.sit()
        self.sit()


# object
# instance of the class
# instantiation
dog1 = Dog("Vicky", 3, "brown and white")
dog2 = Dog("Leia", 0, "red and white")
dog3 = Dog("Runt", 4, "black")
print(dog1)
print(dog2)
print(dog3)
print(dog1.name)
print(dog2.name)
print(dog3.name)
# print(dog1.age)
# print(dog1.hair_color)

dog1.sit()
dog2.sit()
dog3.sit()

dog1.play_dead(dog2)

# SELF
    # implicity passed when calling a method (meaning done for you)
    # a reference to the object that called the method



class Person:
    def __init__(self, name):
        self.name = name


    def pet_dog(self, dog):
        print(f"I, {self.name}, am petting this very good dog {dog.name}")


person1 = Person("Shawn")

person1.pet_dog(dog1)
person1.pet_dog(Dog("Bosco", 5, "brown and white"))










