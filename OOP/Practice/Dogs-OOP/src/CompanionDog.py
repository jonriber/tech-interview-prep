from Dog import Dog
class CompanionDog(Dog):
  def __init__(self, name, age, breed, owner):
    super().__init__(name, age, breed)
    self.owner = owner
    
  def walk(self):
    return f"{self.name} is walking with {self.owner} right now!"