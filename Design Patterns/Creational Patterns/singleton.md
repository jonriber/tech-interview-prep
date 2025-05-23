# Singleton Creational Pattern

Most commonly used design pattern in OOP. When in OOP, the primary goal is to ensure a class has only one instance
and provide a global point of access to that instance.

## Intent

Main intention of Singleton pattern is:

- Control object creation to ensure that only one instance exists.
- Provide global access to that instance

## Motivation

The scenario: I need exactly one object to coordinate actions across the system

- A configuration manager
- A logger
- A connection pool
- A cache

I can't have multiple instances of a logger, for example, because it could lead to inconsistent states or resource
overhead.

## Structure

Singleton pattern involves:

- Private static variable to hold the single instance
- Private constructor to prevent instantiation from outside the class
- A public static method (getInstance()) to provide access to the instance

## Practical examples

One should use the singleton pattern when:

- You need to ensure a class has only one instance
- You need controlled access to that instance
- You want to avoid global variables but still share a single resource