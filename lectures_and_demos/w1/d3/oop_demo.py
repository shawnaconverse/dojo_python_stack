from datetime import datetime


class Person:
    def __init__(self, first_name, last_name, role, interests = []):
        self.first_name = first_name
        self.last_name = last_name
        self.role = role
        self.interests = interests
    

    # magic methods - dunder methods (double underscore)
    # we can overwrite magic methods to do what we want
    def __repr__(self):
        return f"{self.first_name} {self.last_name}"


class Lecture:
    def __init__(self, lecturer, topic, start_time, location, attendees = []):
        self.lecturer = lecturer
        self.topic = topic
        self.start_time = start_time
        self.location = location
        self.attendees = attendees


    def __repr__(self):
        s = '\n'
        s += f"\n lecturer: {self.lecturer}"
        s += f"\n topic: {self.topic}"
        s += f"\n start_time: {self.start_time}"
        s += f"\n location: {self.location}"
        s += f"\n attendees: {self.attendees}"
        return s


    def get_shared_interests(self):
        # SETUP
        interests_dict = {}
        shared_interests_dict = {}

        # WORK
        for attendee in self.attendees: # grab each attendee in list of attendees
            for interest in attendee.interests: # grab each interest for the attendee
                # this is the first time we've encountered this interest
                # so it doesn't exist in the dictionary
                # add the key with a list as the value
                # the attendee is what is inside that list
                if interests_dict.get(interest) is None:
                    interests_dict[interest] = [attendee]
                # this interest already existst in the dictionary
                # so append the attendee to the list value
                else:
                    interests_dict[interest].append(attendee)

        for interest, persons_interested in interests_dict.items():
            if len(persons_interested) > 1:
                # add this interest as a new key in the dictionary
                # with it's value which is a list of all people interested
                shared_interests_dict[interest] = persons_interested

        # RETURN
        print(interests_dict)
        print(shared_interests_dict)
        return shared_interests_dict


shawn = Person(
    "Shawn", 
    "Converse", 
    "instructor", 
    ["coding", "gaming", "dogs", "food"]
)

tyler = Person(
    "Tyler",
    "Thibault",
    "instructor",
    ["coding", "being bald", "roundhouse kicks"]
)

oop_lecture = Lecture(
    shawn,
    "OOP",
    datetime.now(),
    "San Jose",
    [
        Person(
            "Jake",
            "Dunny",
            "student",
            ["basketball"]
        ),
        Person(
            "Chuck",
            "Norris",
            "should be teaching me",
            ["roundhouse kicks"]
        ),
        Person(
            "Yoda",
            "N/A",
            "Jedi master",
            ["Crazy flips and lightersaber battles"]
        ),
        tyler
    ]
)

print(oop_lecture)
print(oop_lecture.get_shared_interests())


