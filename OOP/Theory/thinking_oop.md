# Thinking in OOP mode

Step-by-step to think pragmatically in OOP mode.

## Understand core concepts

1. Class = A blueprint for creating objects
2. Object = An instance of a class
3. Encapsulation = Keep internal details hidden, exposing only what is necessary
4. Abstraction = Simplify complex reality by modeling classes appropriate to the problem
5. Inheritance = Reuse code by creating new classes from existing ones
6. Polymorphism = Use a unified interface for different data types or classes

## Reframing problems

When facing a problem, there are key questions that usually help to solve a problem using OOP

Questions:

- What are the nouns? These usually are classes (User, Product, Order)
- What are the verbs? These are likely methods (place_order(), login())
- What data does each object need to carry?
- How should objects interact with each other?

## Small OOP exercises

There are some small OOP exercises to practice core concepts:

Bank Account:

- classes: BankAccount, Customer
- Methods: deposit(), withdraw(), get_balance()
- Explanation of methods and implementations

Library System:

- Classes: Book, Library, Member
- Methods: borrow_book(), return_book()

Zoo Management:

- classes: Animal -> Lion, Elephant, Monkey
- Methods: make_sound(), feed()