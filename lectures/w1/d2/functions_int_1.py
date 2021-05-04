# PROBLEM 1 - UPDATE VALUES IN DICTIONARIES AND LISTS
x = [ [5,2,3], [10,8,9] ]
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

def update_values(x, students, sports, z):
    # Change the value of 10 in x to be 15
    x[1][0] = 15
    # change last_name of the first student from "Jordan" to "Bryant"
    students[0]['last_name'] = "Bryant"
    # in sports_directory change "Messi" to "Andres"
    sports['soccer'][0] = "Andres"
    # Change the value of 20 in z to 30
    z[0]['y'] = 30

update_values(x, students, sports_directory, z)

# PROBLEM 2 - ITERATE THROUGH A LIST OF DICTIONARIES
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

dogs = [
    {"name": "Spot", "hair_texture": "brown"},
    {"name": "Rover", "hair_color": "black"}
]

def iterate_dictionary(some_list):
    # Loop through the list
    for item in some_list:
        print(f"first_name - {item['first_name']}, last_name - {item['last_name']}")

# What if you do not know what the keys are
def iterate_dictionary2(some_list):
    print_string = ""
    for item in some_list:
        for key, value in item.items():
            print_string += f"{key} - {value}, "
        print(print_string)
        print_string = ""

iterate_dictionary2(students)
iterate_dictionary2(dogs)

print("=" * 74)
# PROBLEM 3 - GET VALUES FROM A LIST OF DICTIONARIES

def iterate_dict(key_name, some_list_of_dictionaries):
    for some_dict in some_list_of_dictionaries:
        print(some_dict[key_name])


def iterate_dict2(key_name, some_list):
    for some_dict in some_list:
        # Edge Case
        if key_name in some_dict:
            print(some_dict[key_name])
        else:
            print(f"Key name: {key_name} is not found!")

iterate_dict2("first_name", students)
iterate_dict2("hair_color", dogs)


print("=" * 74)
# PROBLEM 4 - ITERATE THROUGH A DICTIONARY WITH LIST VALUES
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def print_info(some_dict):
    # Loop through the dictionary
    for key in some_dict:
        # print length of list and uppercase key_name
        print(f"{len(some_dict[key])} {key.upper()}")
        # Loop to print each item in the list
        for item in some_dict[key]:
            print(item)
        print()

print_info(dojo)
