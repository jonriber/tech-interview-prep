from fastapi import FastAPI
from models import Review, Book


## Data base Mock 

books_db = [
  {"id": 1, "title": "1984", "author": "George Orwell", "description": "Dystopian novel.", "reviews": []},
  {"id": 2, "title": "To Kill a Mockingbird", "author": "Harper Lee", "description": "Classic novel.", "reviews": []}
]


app = FastAPI()

@app.get("/")
def read_root():
  return {"message": "Welcome to the Book Review API"}

## Defining my CRUD ROUTES


## Create new book using the POST method
@app.post("/books/")
def create_book(book:Book):
  books_db.append(book.dict())
  return books_db[-1]

## 