# Decorators

Decorators in python are a powerful feature that allow us to modify or extend functionality of a function or a class
without modifying their code.

Benefits of its usage:

- Code reusability
- Separation of concerns
- Cleaner and more readable syntax

In short terms, a decorator is nothing more but a function that accepts another function as argument, adds some 
functionality and returns the function.

## Practical example

```python

def my_decorator(func):
  def wrapper():
    print("doing something before calling the function")
    func()
    print("doing somethig after")
  return wrapper

# usage

@my_decorator
def say_hello():
  print("Hi")

say_hello()

```

## When to use

Use decorators when you want to:

- Add logging to functions.
- Enforce access control and authentication.
- Measure performance (e.g., timing function execution).
- Cache results (memoization).
- Validate input/output.
- Register plugins or routes (common in frameworks like Flask or FastAPI).

## Real world examples

FastAPI Route handlers:

```python
@app.get("/items/")
def read_items():
  return {"items": []}

```