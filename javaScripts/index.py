# print("Hello shema")

# print("*"* 10)
# sum = 99 + 6
# print("Sum:", sum)


# class Dog:
#     def __init__(self, name, breed, owner):
#         self.name = name
#         self.breed = breed
#         self.owner = owner

#     def bark(self):
#         print(f"{self.name} says Woof!")
#         print(f"{self.name} is a {self.breed} and is owned by {self.owner.name}.")

# class Owner:
#     def __init__(self, name, address, contact):
#         self.name = name
#         self.address =  address
#         self.contact = contact
            
# owner1 = Owner("Alice", "123 Main St", "555-1234")
# my_dog = Dog("Buddy", "Golden Retriever", owner1)
# print(my_dog.owner.name)
# my_dog.bark() 



# class Person:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def greet(self):
#         print(f"Hello, my name is {self.name} and I am {self.age} years old.")
#     def have_birthday(self):
#         self.age += 1
#         print(f"Happy birthday {self.name}! You are now {self.age} years old.")    

# person1 = Person("John", 30)
# person1.greet()
# person1.have_birthday()


from datetime import datetime
class User:
    def __init__(self, username, email, password):
        self.username = username 
        self._email = email
        self.password = password
    def get_email(self):
        print(f"Email is access at {datetime.now()}")
        return self._email
    def set_email(self, new_email):
        if "@" and ".com" in new_email:
            self._email = new_email
            print(f"Email is updated successfully at {datetime.now()} ")
        else:
            return print("Email will not be updated because of Invalid email")


user = User("SHEMA", "shema@shema.com", "123")
print(user.get_email())
user.set_email("roger@")
print(user.get_email())




