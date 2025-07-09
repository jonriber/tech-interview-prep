# Encapsulation - OOP

Encapsulation is one of the fundamental principles of OOP.

The main idea behinf it is to bundledata (attributes) and methods that operate on the data into a single unit (class) 
and restricting direct access to some of the object's components.

In python, encapsulation is implemented by:

1. Using private and protected menbers (via naming convention)
2. Controlling access to data using getters and setters.

## Example: Basic encapsulation with a class

```python
class BankAccount:

  def __init__(self, owner, balance):
    self.owner = owner
    self.__balance = balance

  def deposit(self, amount):
    if amount > 0:
      self.__balance += amount
      print(f"Deposited amount: ${amount}")
    else:
      print("deposit amount must be positive")
  
  def withdraw(self, amount):
    if 0 < amount <= self.__balance:
      self.__balance -= amount
      print(f"Withdraw: ${amount}")
    else:
      print("Insuficient funds or invalid amount")
    
    def get_balance(self):
      return self.__balance

account = BankAccount("Alice, 1000")
account.deposit(200)
account.withdraw(500)

print("Balance:", account.get_balance())

print(account.__balance)
```

