# 4 Pillars of OOP

# 1. Encapsulation
    # grouping things together
    # data and functionality into objects

class Human:
    def __init__(self):
        self.str = 10
        self.dex = 10
        self.int = 10
        self.hp = 100
    

    def attack(self, target):
        # what is target? another Human object
        target.hp -= self.str

    
    def rest(self):
        self.hp += 20

josh = Human()
addison = Human()

# 2. Inheritance
    # passing attributes and methods from one class to another
    # parent class and child class

class Rogue(Human):
    def __init__(self):
        super().__init__()
        self.dex = 20
    

    def backstab(self, target):
        target.hp -= self.dex


class Assassin(Rogue):
    def __init__(self):
        super().__init__()
        print(f"The base human str is {self.str}")
        print(f"The base rogue dex is {self.dex}")
        self.dex = self.dex * 3

eddy = Rogue()
print(eddy)
print(eddy.str)
print(eddy.dex)
eddy.attack(josh)
print(f"Josh's HP: {josh.hp}")
eddy.backstab(josh)
print(f"Josh's HP: {josh.hp}")

benny = Assassin()
print(benny.hp)
print(benny.str)
print(benny.dex)

# 3. Polymorphism
    # A child can replace (override) methods from the parent

class Druid(Human):
    def __init__(self):
        super().__init__()
        # using polymorphism to override the parent attributes
        self.str = 20
        self.int = 20
        self.hp = 120
    

    # use polymorphism to override (replace) the parent methods
    def rest(self):
        super().rest()
        self.hp += 40
        

print("=" * 80)
cameron = Druid()
print(f"Cameron's hp is {cameron.hp}")
cameron.rest()
print(f"Cameron's hp is {cameron.hp}")
print(f"Benny's hp is {benny.hp}")
benny.rest()
print(f"Benny's hp is {benny.hp}")
# print(f"Cameron's dex is {cameron.dex}")


# 4. Abstraction
    # extension of encaspulation
    # hide attributes and methods
    # association between classes

class Warrior:
    def __init__(self):
        self.str = 50
        self.dex = 10
        self.int = 10
        self.hp = 150
    

    def attack(self, target):
        target.hp -= self.str


class Orc:
    def __init__(self, name):
        self.name = name
        self.char_class = Warrior()

    
    def attack(self, target):
        self.char_class.attack(target)


print("=" * 80)
print("=" * 80)

shawn = Orc("Shawn")
print(shawn.name)
print(shawn.char_class)

