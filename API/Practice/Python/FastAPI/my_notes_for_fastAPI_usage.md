# FastAPI | My experience

## Installation

It is easy as a simple javascript package.

Just initializing a `venv` and running `pip install "fastapi[standard]"` worked for me

## Creating my first routes

All I had to do was to create a new file called `main.py` and import 2 things: `typing` and `fastAPI`

Then, initiate a new instance of fastAPI inside a variable called `app`, pretty much the same I usually do for a 
`DB Instance on javascript or Python`.

### Defining endpoints and methods

Using a decorator above function definition to tell fastAPI framework what means what.

Example 

```python
  @app.get("/")
  def read_root():
    return "Hello, I am root"
```

This tells me that:

- I am using my app instance of fastAPI
- I am defining the `HTTP GET method`
- Setting my endpoint route

## How to run the code

First of all, initialize `venv`.

Then, navigate to the folder where your `main.py` is.

On your terminal, run `fastapi dev main.py`

A local server will be build on your computer´s `localhost:8000`
