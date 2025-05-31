# Adapter Structural Pattern

This pattern allows objects with incompatible interfaces to work together. It acts like a bridge
between two incompatible interfaces.

Image that we have an existing class with a specific interface, and a new class or library
uses a different one.

Instead of rewriting the whole code base or the new class, one can use an adapter to make 
them work together.

## Structure

- Target: the interface expected by the client code
- Adaptee: the existing class with a different interface
- Adapter: translates the target interface to the adaptee

## Class vs Object Adapter

