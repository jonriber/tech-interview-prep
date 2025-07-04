# Available Class Methods

In python, when one create a class, there are three types of methods avaiable:

- static class
- instance method
- class method

## Static Methods

Static methods are very usefull when you don't need class or instance access. Which means you are not modifying it
(self or cls first argument).

When the method does not need access to instance or class data.

This method is callable via instance or class: ClassName.method() or instance.method()

It is ideal for utility functions that logically belong to the class but don't depend on class state.

It need a decorator named `@staticmethod`

For example: a function that converts a temperature from celcius to farenheit.

```python

class MathTools:
  @staticmethod
  def add(x, y):
      return x + y

# Usage
print(MathTools.add(5, 3))  # Outputs: 8

```

## Instance Method

This is the default method of a class.

It needs a first argument named `self`.

Using this type of method, one can access and modify object´s state.

```python

class Counter:
  def __init__(self):
    self.count = 0
  
  def increment(self):
    self.count += 1
    return self.count

```

## Class method

Class methods receive a first argument named cls.

Can access and modify class state, not instance state.

useful for alternative constructors or methods that affect the class as a whole.

it requires the decorator `@classmethod`


```python
class User:
  users = []
  
  def __init__(self, name):
    self.name = name
    User.users.append(self)
  
  @classmethod
  def total_users(cls):
    return len(cls.users)


```