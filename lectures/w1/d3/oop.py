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


# Class and Static Methods
class BankAccount:
    # Class Variables
    bank_name = "First National Bank of Cauliflower Pizza Crusts"
    all_accounts = [] # this list is a list of bank account objects

    # default params so dont need to specify each time
    def __init__(self, int_rate = 0.02, balance = 0):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self) # appending the newly created object to the list
    

    # instance methods effect the instance (object) that calls the method
    # instance method
    def deposit(self, amount):
        self.balance += amount


    # instance method
    def withdraw(self, amount):
        if BankAccount.can_withdraw(self.balance, amount):
            self.balance -= amount
        else:
            print("Insufficient Funds")
    

    # Class methods
        # Refers to the class itself, NOT to any specifc object
    @classmethod # this decorator tells python the following method is a class method
    def change_bank_name(cls, name): # cls is a reference to the class
        cls.bank_name = name
        # BankAccount.bank_name = name


    @classmethod
    def sum_all_balances(cls):
        sum = 0
        # cls.all_accounts accesses the class variable which is a list of account objects
        # hot_dog is just the loop variable to hold each account as we iterate
        for hot_dog in cls.all_accounts:
            sum += hot_dog.balance
        return sum


    # Static methods
        # Doesn't have access to instances
        # Doesn't have access to the class
        # just a plain old function
        # purely for organization
    @staticmethod
    def can_withdraw(balance, amount):
        if balance - amount >= 0:
            return True
        else:
            return False


act_1 = BankAccount()
act_2 = BankAccount(.5, 3)

act_1.deposit(500)
act_2.deposit(750)
act_2.deposit(750)
act_2.deposit(750)
act_2.deposit(750)
act_1.withdraw(250)


print(BankAccount.sum_all_balances())