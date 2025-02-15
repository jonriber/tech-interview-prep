class Dog:
  def __init__(self, name, age, breed):
    self.name = name
    self.age = age
    self.breed = breed
  
  def bark(self):
    return "Auf Auf"
  
  def sit(self):
    return f"{self.name} is sitting right now!"
  
  