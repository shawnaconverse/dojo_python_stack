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

# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
x[1][0] = 15
# Change the last_name of the first student from 'Jordan' to 'Bryant'
students[0]['last_name'] = "Bryant"
# In the sports_directory, change 'Messi' to 'Andres'
sports_directory['soccer'][0] = "Andres"
# Change the value 20 in z to 30
z[0]['y'] = 30

# ==========================================================================================
# PROBLEM 2 - ITERATE THROUGH A LIST OF DICTIONARIES
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
def iterate_dictionary(some_list):
    print_string = ""
    for student in some_list:
        for key, value in student.items():
            # print_string += f"{key} - {value}, "
            print_string += "{} - {}, ".format(key, value)
        print(print_string)
        print_string = ""


iterate_dictionary(students)

# ==========================================================================================
# PROBLEM 3 - GET VALUES FROM A LIST OF DICTIONARIES
def iterate_dictionary2(key_name, some_list):
    for student in some_list:
        
        #  "first_name" not a key of student
        if key_name not in student:
            print("Key is not in dictionary")
        else:
            print(item[key_name])
        # print(item[key_name])
        # "first_name" a key of student => True
        # "last_name" a key of student => True
        # "hotdog" a key of student => False
        if key_name in student:
            print(student[key_name])
        else:
            print("Key is not in dictionary")



# iterate_dictionary2("first_name", students)
# iterate_dictionary2("last_name", students)
# iterate_dictionary2("spam", students)

# ==========================================================================================
# PROBLEM 4 - ITERATE THROUGH A DICTIONARY WITH LIST VALUES
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def print_info(some_dict):
    for key in some_dict:
        print("{} {}".format(len(some_dict[key]), key.upper()))
        for item in some_dict[key]:
            print(item)

print_info(dojo)




