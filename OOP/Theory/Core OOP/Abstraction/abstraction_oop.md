# Abstraction - OOP

Abstraction means hiding complext implementation details and showing only what is essential.

It allows me to:

- Work with `what` an object does instead of `how` it does it.
- Focus on `relevant behavior`, ignoring other mechanics


## Real life analogy

I am now creating a scenario of a car:

- While inside the car, I can use `steering whell, brake and accelerator`. This is interface.
- I don´t really need to know how engine or transmission works in order to use car functionalities.

## Abstraction in Code

In programming languages, abstraction is commonly implemented using:

- Abstract classes
- Interfaces (protocols in python)
- Method hiding via public/protected/private modifiers

## Python example of abstraction

Here is a quick example:

```python

from abc import ABC, abstractmethod

class Animal(ABC):

  @abstractmethod
  def make_sound(self):
    pass

class Dog(Animal):
  def make_sound(self):
    return "Woof"

class Cat(Animal):
  def make_sound(self):
    return "Miauu"

animals = [Dog(), Cat()]

for animal in animals:
  print(animal.make_sound())
```

On the example above, I am defining the abstractmethod `make_sound` on the Animal class as an interface, but I am not
implementing it there. Instead, implementation goes inside subclasses.

## Why to use this?

Reasons to implement this into any code:

- Reduce complexity: working with high-level structures
- Improve maintainability: implementation changes wont affect users
- Scalability: Easy to extend with new types (new animals)
- Code reusability

## Practice Ideas

Payment processor interface

- Abstract class: PaymentMethod
- Methods: pay()
- subclasses: CreditCard, Paypal, Crypto

Shape System

- Abstract class: Shape
- Methods: area(), perimeter()
- subclasses: Circle, Rectangle