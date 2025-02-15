# import parent class
from Dog import Dog

# this example shows how to inherit from a parent class
class WorkingDog(Dog):
  def __init__(self, name, age, breed, job):
    # call the parent class constructor
    super().__init__(name,age,breed)
    self.job = job
    
  def work(self):
    return f"{self.name} is working as a {self.job} right now!"