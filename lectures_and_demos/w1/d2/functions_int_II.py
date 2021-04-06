x = [ [5,2,3], [10,8,9] ] # data type - list
students = [ # data type: list of dictionaries
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = { # data type = 
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ] # data type = list, dictionary
​
'''
1. Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
2. Change the last_name of the first student from 'Jordan' to 'Bryant'
3. In the sports_directory, change 'Messi' to 'Andres'
4. Change the value 20 in z to 30
'''
x[1][0] = 15
# print(x)
students[0]['last_name'] = "Bryant"
# print(students)
sports_directory['soccer'][0] = "Andres"
# print(sports_directory)
z[0]['y'] = 30
# print(z)
​
students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDictionary(inComingList):
    # Loop through list 
    for item in inComingList:
        # item - data type? 
        print(f"first_name - {item['first_name']}, last_name - {item['last_name']}")
​
# iterateDictionary(students)
​
# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
'''
Create a function iterateDictionary(some_list) that, given a list of dictionaries, the function loops through each dictionary in the list and prints each key and the associated value. For example, given the following list:
​
​
first_name - Michael, last_name - Jordan
first_name - John, last_name - Rosales
first_name - Mark, last_name - Guillen
first_name - KB, last_name - Tonel
'''
​
'''
Get Values From a List of Dictionaries
Create a function iterateDictionary2(key_name, some_list) that, given a list of dictionaries and a key name, the function prints the value stored in that key for each dictionary. For example, iterateDictionary2('first_name', students) should output:
​
Michael
John
Mark
KB
​
1. create a function that takes a key_name and a list of dictionaries
2. loop through all dictionaries in list
3. find the key in current dictionary
4. print the value
'''
​
def iterateDictionary2(key_name, list_of_dictionaries):
    for item in list_of_dictionaries:
        print(item[key_name])
​
​
# iterateDictionary2('last_name', students)
​
'''
Create a function printInfo(some_dict) that given a dictionary whose values are all lists, prints the name of each key along with the size of its list, and then prints the associated values within each key's list. For example:
​
'''
dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
'''
printInfo(dojo)
# output:
7 LOCATIONS
San Jose
Seattle
Dallas
Chicago
Tulsa
DC
Burbank
    
8 INSTRUCTORS
Michael
Amy
Eduardo
Josh
Graham
Patrick
Minh
Devon
​
1. create function takes in a dictionary of lists
2. loop through all keys
3. for each key 
3.1. print out the key
3.2. print out the len of the list
3.3. print out each value in the list
​
dict[key]
​
'''
def printInfo(dict):
    for key in dict:
        value_list = dict[key]
        print(f'{len(value_list)} {key.upper()}')
        for item in value_list:
            print(item)
​
printInfo(dojo)