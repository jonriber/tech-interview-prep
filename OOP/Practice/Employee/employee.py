
class Employee:
  company = 'EvilCorp'

  def __init__(self, name, salary):
    self.name = name
    self.salary = salary

  def get_details(self):
    return f"Employee Name: {self.name}, Employee Salary: {self.salary}, Company: {self.get_company()}"
  
  @classmethod
  def get_company(cls):
    return cls.company

if __name__ == '__main__':
  emp1 = Employee('Alice', 50000)
  emp2 = Employee('Bob', 60000)

  print(emp1.get_details())
  print(emp2.get_details())
  
  # Accessing the class variable directly
  print(f"Company: {Employee.company}")
  
  # Accessing the class method
  print(f"Company via class method: {Employee.get_company()}")