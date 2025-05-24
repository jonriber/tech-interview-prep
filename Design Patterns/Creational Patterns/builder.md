# Builder Design Pattern

The builder design pattern is a creational design pattern that is used to construct complex
objects step by step.

Unlike other creational patterns, this one doesn't require the product to have a complex constructor.

It is very useful when you need to build different representations of an object using the same
construction proccess.

## Theory

When a class has many optional parameters, constructors might become hard to read and maintain, 
or become messy and inconsistent.

Example:

`python
  car = Car(engine="v8", wheels=4, color="red", sunroof=True, gps=True)
`

In the xample above, if the number of constructor parameters increases, it might start to become 
uncontrollable.

Key components:

- Product: the complex object being built
- Builder: Specifies an abstract interface for creating parts of Product
- ConcreteBuilder: Implements the Builder interface and keeps track of the representation it creates
- Director (optional): Constructs an object using the Builder interface

## Benefits of usage

- Separation of construction and representation
- Step-by-step construction allows optional parts
- Reusable builder code across different products

## When to use

- When object has many optional fields or configurations
- When you want different representations of the same object
- When object creation is complex or multi-step

## Exercises

SQL Query Builder:
Create a class that builds SQL SELECT queries step by step:
`python
  builder.select("id", "name").from_table("users").where("age > 30").order_by("name").build()
`

Car Configurator:
Model a car configurator where customers can choose engine type, number of seats, color, sunroof, GPS, etc.

Email Builder:
Create an email message builder with fields for to, from, subject, body, attachments, and optional cc and bcc.

Resume Generator:
Use the builder pattern to construct a resume with optional sections: work experience, education, skills, projects, and references.