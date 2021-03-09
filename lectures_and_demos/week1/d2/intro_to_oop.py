# OOP
# Object Oriented Programming => Programmming Paradigm

# The Hard Way
# expressing real life models
dog = {
    "hair": "long",
    "name": "Vicky",
    "size": "large"
}
dog1 = {
    "hair": "short",
    "name": "Shiro",
    "size": "small"
}
dog2 = {
    "hair": "long",
    "name": "Vicky",
    "size": "large"
}

account = {} # *10000000

# The Better Way

# Object - DATA - Functions
# instance
# Class
class Dog:
    def __init__(self, hairParam, nameParam, sizeParam):
        # Attributes
        self.hair = hairParam
        self.name = nameParam
        self.size = sizeParam
    
    # METHOD
    def bark(self):
        print("BARK BARK MY NAME IS {}".format(self.name))

# WE CREATED OBJECTS
# THESE ARE INSTANCES OF THE DOG CLASS
# WE ARE INSTANTIATING THE DOG CLASS
dog1 = Dog("long", "Vicky", "large")
dog2 = Dog("short", "Shiro", "small")

# print(dog1.name)
# print(dog1.hair)
# print(dog2.name)
# dog2.bark()
# dog1.bark()

# Pascal Case   EveryFirstLetterIsCapital
class Person:
    # Constructor
    def __init__(self, nameParam, age_param, interestsParam):
        self.name = nameParam
        self.age = age_param
        self.interests = interestsParam


    def do_a_skateboard(self):
        print("I did a sweet ollie")

    
    def have_a_birthday(self):
        self.age += 1

    
    def add_an_interest(self, shubbery):
        self.interests.append(shubbery)


person1 = Person("Shawn", 27, ["coding"])
person2 = Person("Jane", 25, ["movies"])

person1.do_a_skateboard()
print(person2.age)
person2.have_a_birthday()
print(person2.age)
print(person1.interests)
person1.add_an_interest("music")
print(person1.interests)
print(person2.interests)




