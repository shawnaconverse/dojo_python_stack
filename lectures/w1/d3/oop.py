# 4 Pillars of OOP


# 1. Encapsulation
# idea of organizing our code together into groups, called classes

class Creature():
    def __init__(self, name):
        self.name = name
        self.str = 5
        self.dex = 5
        self.int = 5
        self.health = 50


class Orc(Creature):
    def __init__(self, name):
        super().__init__(name)
        self.str = 25
        self.health = 150

class Warrior(Orc):
    def __init__(self, name, alignment = "Chaotic Evil"):
        super().__init__(name)
        self.str = 35
        self.alignment = alignment
    

    def boulder_smash(self, target):
        target.health = target.health / 2


shawn = Warrior("Shawn", "Pure Neutral")
print(shawn.name)
print(shawn.alignment)
print(shawn.str)
print(shawn.dex)
print(shawn.int)
print(shawn.health)

print("=" * 80)

class Human(Creature):
    count = 0
    def __init__(self, name):
        self.name = name
        self.str = 10
        self.dex = 10
        self.int = 10
        self.health = 100
        Human.count += 1
    

    def attack(self, target):
        # target is going to be some other instance of the human class
        target.health -= self.str
        print(f"{target.name} lost {self.str} health by {self.name}.")


    def short_rest(self):
        if self.health > 85:
            self.health += 100 - self.health
        else:
            self.health += 15
        print("This is the PARENT METHOD")

    
    @classmethod
    def get_count(cls):
        return cls.count


bob = Human("Bob")
jennifer = Human("Jennifer")

print(bob.str)
print(bob.dex)

# 2. Inheritance
# one class can pass attributes and methods to another class
# parent / child relationship

class Rogue(Human):
    def __init__(self, name):
        # child class has access to parent methods
        # we use the keyword super to access these parent methods
        super().__init__(name)
        self.dex = 20


    def pocket_sand(self, target):
        target.health -= self.dex
        print(f"{target.name} lost {self.dex} health by {self.name}.")
        # TODO: add blind attribute

    # 3. Polymorphism
    # a child can have different versions of the same methods
    def short_rest(self):
        if self.health > 75:
            self.health += 100 - self.health
        else:
            self.health += 25
        print("This is the CHILD method")


christian = Rogue("Christian")
print(christian.str)
print(christian.dex)

bob.attack(christian)
christian.pocket_sand(bob)


bob.short_rest()
christian.short_rest()


# 4. Abstraction
# extends from encapsulation
# hiding all the attributes and methods
# Association between classes
# class Player:
#     def __init__(self, name):
#         self.name = name
#         self.job = Rogue()
    

#     def player_attack(self, target):
#         self.job.attack(target)

# class User:
#     def __init__(self):
#         self.name = "fred"
#         self.account = BankAccount()
    
    
#     def withdraw(self, amount):
#         self.account.withdraw(amount)

class Wizard(Human):
    def __init__(self, name):
        super()



print(bob.health)
shawn.boulder_smash(bob)
shawn.boulder_smash(bob)
shawn.boulder_smash(bob)
shawn.boulder_smash(bob)
shawn.boulder_smash(bob)
shawn.boulder_smash(bob)
shawn.boulder_smash(bob)
shawn.boulder_smash(bob)
shawn.boulder_smash(bob)
shawn.boulder_smash(bob)
print(bob.health)


# Week2 of python example

class User:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.email = data['email']
        self.ice_creams = [] # list of ice cream objects
    

    @classmethod
    def get_user_by_id(cls, data):
        # get user from the database

        for row in results:
            user.ice_creams.append(IceCream(row))
        
        return user

