# Factory Design Pattern

When I want to abstract the instantiantion proccess of objects.

The factory design pattern provides a way to delegate the instantiation logic to a method, which returns an instance
of a class, usually based on the same input.

Purpose:

- Encapsulate object creation logic
- Promote loose coupling in your code
- Adhere to the Open/close principle (open for extension/closed for modification)

## When to use

One should use when:

- You have a superclass with multiple subclasses, and you need to return one of the subclasses based on some condition
- Creation logic is complex or may change
- You want to hide the instantiation proccess from the client 

