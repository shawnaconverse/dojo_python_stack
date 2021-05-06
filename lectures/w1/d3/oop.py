# OOP
# What is OOP?
    # OBJECT ORIENTED PROGRAMMING
        # Paradigm - other ones like Functional or Procedural
    # A way to think about how we use data in our application
    # IN OOP, we think of data first, then the functions that need to be done

# Why use OOP?
    # Organization
    # Modular
    # Efficiency 
    # Models real life things


# That Hard Way
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
    "hair_color": "dirty white"
}



# The Better Way
# Class
    # how we make our custom data type
    # blueprint or a model
    # create instances of class , AKA objects

# class Dog:
#     pass

# instantiating
# dog1 = Dog()
# print(dog1)

class Dog:
    # Constructor
    def __init__(self, name, age, hair_color):
        # attributes - the actual data thats part of the object
        self.name = name
        self.age = age
        self.hair_color = hair_color

    # Method - a function that is part of a class
    def bark(self):
        print(f"BARK BARK my name is {self.name}!")
    
    def fetch(self):
        print(f"BARK BARK i'm gettin the ball!")
    
    def eat_treats(self, num_of_treats):
        print(f"BARK BARK THANK YOU FOR THE {num_of_treats} TREATS!")


# implicit passing of self

dog1 = Dog("Vicky", 3, "brown and white")
dog2 = Dog("Leia", 0, "red and white")
dog3 = Dog("Shiro", 9, "dirty white")
print(dog1.name)
print(dog2.name)
print(dog3.name)

dog1.bark()
dog2.bark()
dog3.bark()
dog1.eat_treats(3)


# NAMING CONVETION FOR CLASS NAMES
    # Should be Pascal Case   - every word is capitalized
    # class names should always be singular, NOT plural

# how does Python tell the difference between a variable and a function?
    # the parens
# def clean_up_poop():
#     pass
# dog = "Vicky"
# clean_up_poop()

# def bank_account():
#     pass

# class bankAccount:
#     pass

# bank_account()
# BankAccount()

# CLASS and STATIC methods

class BankAccount:
    # Class variables - belong to the class, not any specific object
    bank_name = "Bank of Ninjas"
    all_accounts = []
    def __init__(self, int_rate = 0.2, balance = 0):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)

    # INSTANCE METHODS - belond to each individual object
    def withdraw(self, amount):
        if BankAccount.can_withdraw(self.balance, amount):
            self.balance -= amount
        else:
            print("Insufficient funds.")
    

    def deposit(self, amount):
        self.balance += amount


    # CLASS METHODS - belong to the class itself
    @classmethod
    def change_bank_name(cls, name):
        cls.bank_name = name
        return cls

    
    @classmethod
    def all_balances(cls):
        sum = 0
        for account in cls.all_accounts:
            sum += account.balance
        return sum


    # STATIC METHOD - belongs to nothing
    # stand alone method in a class. they do NOT have access to either instance or class attributes
    @staticmethod
    def can_withdraw(balance, amount):
        if (balance - amount) < 0:
            return False
        else:
            return True

# BankAccount.change_bank_name("Popcorn Bank")
# BankAccount.can_withdraw()

# ASSOCIATION BETWEEN CLASSES

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(0.5, 777777)
        self.accounts = []

    
    def withdraw(self, amount):
        self.account.withdraw(amount)


    def deposit(self, amount):
        self.account.deposit(amount)
    

user1 = User("Shawn", "shawn@email.com")
user2 = User("Jim", "jim@email.com")

user1.account.balance
user1.account.int_rate
user1.account.withdraw()


# FOUR PILLARS of OOP




