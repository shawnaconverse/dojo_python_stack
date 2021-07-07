# OOP


# HARD WAY

dog1 = {
    "name": "Vicky",
    "age": 3,
    "hair_color": "brindle"
}

dog2 = {
    "name": "Leia",
    "age": 0,
    "hair_color": "red and white"
}

dog3 = {
    "name": "Shiro",
    "age": 9,
    "hair_color": "dirty white"
}

# THE BETTER WAY

# blueprint to create infinite objects
# Naming Conventions
# classes should be sigular
# classes should be PascalCase
    # every word is capitalized
class Dog:
    # constructor is a method
    def __init__(self, name, age, hair_color):
        # Attributes
        # actual data held inside of an object
        self.name = name
        self.age = age
        self.hair_color = hair_color
        # implicitly returns the created object


    def __repr__(self):
        return f"Name: {self.name}, Age: {self.age}, Hair Color: {self.hair_color}."


    # Methods
    # function that is part of class
    def bark(self):
        print(f"BORF BORF my name is {self.name}!")



# create an instance of the class
# create an object
# instantiate

dog1 = Dog("Vicky", 3, "brindle")
dog2 = Dog(age = 0, hair_color = "red and white", name = "Leia")
dog3 = Dog("Shiro", 9, "white")
print(dog1)
print(dog1.__dict__)
print(dog2.name)
print(dog2.age)
dog1.bark()
dog2.bark()
dog3.bark()

# SELF
    # is a variable that holds the reference to the object that called the method
    # using self, an object has access to its attributes
    # just like this in JS
    # self is passed implicitly
        # we do not pass the object reference. it is done for us