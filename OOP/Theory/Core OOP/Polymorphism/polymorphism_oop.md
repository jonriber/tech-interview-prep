# Polymorphism - OOP

Polymosphism study appied to classes using python.

Basically this means that an object has many forms, allowing objects of different classes to be treated through the 
same interface.

In python there are two main types of polymoshpism:

- Compile-time polymosphism (Method overloading) -> limited support in Python
- Runtime polymosphism (Method overriding) -> Fully supported in Python

## Methed Overriding

When a subclass provides a specifc implementation of a method already defined in its superclass.

```python

class Animal:
  def speak(self):
    return "some sound"
  
class Dog(Animal):
  def speak(self):
    return "woof"

class Cat(Animal):
  def speak(self):
    return "Meow"

animals = [Dog(), Cat(), Animal()]

for animal in animals:
  print(animal.speak())

```

Each object respondes differently to the same method call `speak()`.

## Duck Typing

Pyhon supports duck typing - if it looks like a duck and quacks like a duck, it is treated as a duck.

```python
class Bird:
  def fly(self):
    print("Bird is flying")
class Airplane:
  def fly(self):
    print("Airplane is flying")

def lift_off(entity):
  entity.fly()

lift_off(Bird())

lift_off(Airplane())

```

Python doesn't care about the type of object, as long as it has the `fly()` method. This is dynamic polymorphism.


## Method Overloading

Python does not support traditional method overloading like Java or C++, but it is possible to achieve similar
behavior using default arguments or `*args`.

```python

class Calculator:
  def add(self, a, b=0, c=0):
    return a + b + c

calc = Calculator()
print(calc.add(5)) # 5
print(calc.add(5, 10)) # 15
print(calc.add(5,10,15)) # 30


```

## Practice exercices

Write a simple class structure like the following:

- Base class: Shape with a method area()
- subclasses: Rectangle, Circle, Triangle, each implementing their own area()