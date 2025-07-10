# Inheritance - OOP

Inheritance is a mechanism where one class derives properties and behaviors from another class (parent).

The benefits of inheritance in OOP are:

- Code reuse - common logic resides in the base class
- Polymorphism - Child class can override behavior
- Extensibility - new functionality can be added with minimal efforts and changes

## Basic example of inheritance in python

```python

class Animal:
  def __init__(self, name):
    self.name = name

  def speak(self):
    return f"{self.name} makes a sound"

class Dog(Animal):
  def speak(self):
    return f"{self.name} barks!!"

dog = Dog("Rex")
print(dog.speak())
```

## super() method

The `super()` method is used when one wants to invoke or use a method from the parent class

```python

class Cat(Animal):
  def __init__(self, name, color):
    super().__init__(name)
    self.color = color

  def speak(self):
    return f"{self.name} meows!"

```

