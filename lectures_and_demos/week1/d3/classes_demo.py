class Person:
    def __init__(self, first_name, last_name, interests, role):
        self.first_name = first_name
        self.last_name = last_name
        self.interests = interests
        self.role = role

    
    # __word__ MAGIC METHODS
    def __repr__(self):
        # repr represent
        return "First Name: {}, Last Name: {}".format(self.first_name, self.last_name)


class Lecture:
    def __init__(self, lecturer, topic, start_time, end_time, location, attendees = []):
        self.lecturer = lecturer
        self.topic = topic
        self.start_time = start_time
        self.end_time = end_time
        self.location = location
        self.attendees = attendees


    def __repr__(self):
        s = ''
        s += "\n lecturer: {}".format(self.lecturer)
        s += "\n topic: {}".format(self.topic)
        s += "\n start_time: {}".format(self.start_time)
        s += "\n end_time: {}".format(self.end_time)
        s += "\n location: {}".format(self.location)
        s += "\n attendees: {}".format(self.attendees)
        return s


    def get_attendees_shared_interests(self):
        interests_dict = {}
        shared_interests_dict = {}

        for attendee in self.attendees:
            for interest in attendee.interests:
                # interest = hiking
                # interests_dict["hiking"] = [attendee]
                if interest not in interests_dict:
                    interests_dict[interest] = [attendee]
                else:
                    interests_dict[interest].append(attendee)

        # .items() gives me the key and the value
        for interest, persons_interested in interests_dict.items():
            if len(persons_interested) > 1:
                shared_interests_dict[interest] = persons_interested
            
        print(interests_dict)
        print("\n\n\n\n\n\n")
        print(shared_interests_dict)
        return shared_interests_dict

similar_words = {
    "hike": ["hikes", "hiking", "hiked"]
}


shawn = Person(
    "Shawn",
    "Converse",
    ["coding", "gaming", "petting my dog"],
    "instructor"
)
ashley = Person(
    "Ashley",
    "D'Allessandro",
    ["video games", "naps", "coding"],
    "student"
)

ben = Person("Ben", "Williford", ["video games", "coding"], "student")


# print(shawn)
# print(ashley)
# print(ben)

oop_lecture = Lecture(
    shawn,
    "OOP in Python",
    "2021-03-09T10:00AM",
    "2021-03-09T11:00AM",
    "Zoom",
    [ashley, ben]
)

# print(oop_lecture)


different_lecture = Lecture(
    Person("Jane", "Doe", ["Hiking", "basketball"], "instructor"),
    "How to code out on the open trail",
    "2021-03-11T10:00AM",
    "2021-03-11T11:00AM",
    "Zoom",
    [
        Person("John", "Williams", ["music", "opera signing", "hiking"], "student"),
        Person("Sally", "Martin", ["reading", "hiking"], "student"),
        Person("Richard", "Harvey", ["star wars"], "student"),
        ashley,
        ben
    ]
)

# print(different_lecture)
different_lecture.get_attendees_shared_interests()



