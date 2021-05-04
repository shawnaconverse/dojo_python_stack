# FUNCTIONS


a = 4
b = 5
c = a + b
print(c)

a = 45
b = 786
c = a + b
print(c)

a = 12
b = 1991
c = a + b
print(c)


# Two parts to a function
# Define
# def is function in JS
def addTwoNums(a, b):
    c = a + b
    print(c)

# Call / invoke
addTwoNums(4, 5)
addTwoNums(45, 786)

# Parameter -  variable declared to accept data for the function
def makeJellyBeans(sugar, water, corn_syrup):
    print(f"Made some jelly beans with {sugar}, {water}, {corn_syrup}")

# Argument - actual data passed to the function
makeJellyBeans("Powdered Sugar", "Dirty pond water", "dark corn syrup")
makeJellyBeans("Brown Sugar", "mountain spring water", "light corn syrup")

# import random
# if random.randInt(0, 100) or something else

# ======================================================================
# RETURN VS PRINT

def orderTacos(money):
    print("I have your tacos!")
    # return "al pastor tacos"
    # return None

# print(orderTacos(18.76)) # al pastor tacos
my_tacos = orderTacos(15.98)
print(my_tacos)

# ======================================================================
# DEFAULT PARAMETERS AND NAMED ARGUMENTS

print("=" * 80)

# default parameters
def greet(name = "", repeat = 2):
    print(f"Good Morning {name} " * repeat)
    
greet()
greet("Shawn")
greet("Shawn", 4)
greet(4) # will this work

# named arguments
greet(repeat = 5)
greet(name = "Tyler")
greet(name = "Jim")
greet(repeat = 30, name = "Jim")

