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

## Read all books using the GET method
@app.get("/books/")
def get_books():
  return books_db

## Read a single book using the GET method
@app.get("/books/{book_id}")
def get_book(book_id: int):
  for book in books_db:
    if book["id"] == book_id:
      return book
  return {"error": "Book not found"}

