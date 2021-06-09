# More OOP


# naming conventions for stuff

# this_is_a_variable = 42
# def this_is_a_function():
#     pass

# def thisIsACamelCaseFunction():

# print(this_is_a_function())
# print(this_is_a_variable)

# # Pascal Case - every word is capitalized
# class ThisIsAClass:
#     pass


# ThisIsAClass()
# this_is_a_function()

# class BankAccount:
#     pass

# BankAccount()

class BankAccount:
    bank_name = "First National Bank of Light Up Sneakers"
    all_accounts = []
    def __init__(self, int_rate = 0.02, balance = 0):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)
    

    # instance method
    def withdraw(self, amount):
        if BankAccount.can_withdraw(self.balance, amount):
            self.balance -= amount
        else:
            print("Insufficient Funds")


    # Class Methods - we use cls
        # cls is a reference to the class iteself
        # it is implicitly passed for us, we do not have to pass it
    @classmethod
    def change_bank_name(cls, name):
        cls.bank_name = name

    
    @classmethod
    def all_balances(cls):
        sum = 0
        for account in cls.all_accounts:
            sum += account.balance

        return sum


    # Static Methods - do not related to either the class or an object
        # completely stand alone
        # Only reason of putting this function here is organization
    @staticmethod
    def can_withdraw(balance, amount):
        if (balance - amount) < 0:
            return False
        else:
            return True


print(BankAccount.all_balances())

ba1 = BankAccount(balance = 123408571)
ba2 = BankAccount(balance = 123456)
ba3 = BankAccount(balance = 12345189)
ba4 = BankAccount(balance = 1980734274)

print(BankAccount.all_balances())

