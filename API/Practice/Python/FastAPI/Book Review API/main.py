from fastapi import FastAPI, Depends, HTTPException
from models import Review, Book, Base
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from database import SessionLocal, engine
from pydantic import BaseModel
from typing import List



# ## Data base Mock 

# books_db = [
#   {"id": 1, "title": "1984", "author": "George Orwell", "description": "Dystopian novel.", "reviews": []},
#   {"id": 2, "title": "To Kill a Mockingbird", "author": "Harper Lee", "description": "Classic novel.", "reviews": []}
# ]

Base.metadata.create_all(bind=engine)

app = FastAPI()

async def get_db() -> AsyncSession:
  async with SessionLocal() as session:
    yield session

class BookCreate(BaseModel):
  title: str
  author: str
  description: str
  
class ReviewCreate(BaseModel):
  user: str
  rating: int
  review: str

@app.get("/")
async def read_root():
  return {"message": "Welcome to the Book Review API"}

## Defining my CRUD ROUTES
## Create new book using the POST method
@app.post("/books/", response_model=Book)
async def create_book(book:Book, db: AsyncSession = Depends(get_db)):
  db_book = Book(**book.dict())
  db.add(db_book)
  await db.commit()
  await db.refresh(db_book)
  return db_book
  # books_db.append(book.dict())
  # return books_db[-1]

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

## Delete a book using the DELETE method
@app.delete("/books/{book_id}")
def delete_book(book_id: int):
  for book in books_db:
    if book["id"] == book_id:
      books_db.remove(book)
      return {"message": "Book deleted successfully"}
  return {"error": "Book not found"}
    
## Update a book using the PUT method
@app.put("/books/{book_id}")
def update_book(book_id: int, book: Book):
  for book in books_db:
    if book["id"] == book_id:
      books_db[book_id] = book.dict()
      return {"message": "Book updated successfully"}
  return {"error": "Book not found"}

## ROutes for reviews

## create a review for a book using the POST method
@app.post("/books/{book_id}/reviews/")
def create_review(book_id: int, review: Review):
  for book in books_db:
    if book["id"] == book_id:
      book["reviews"].append(review.dict())
      return book
  return {"error": "Book not found"}

## Read all reviews for a book using the GET method
@app.get("/books/{book_id}/reviews/")
def get_reviews(book_id: int):
  for book in books_db:
    if book["id"] == book_id:
      return book["reviews"]
  return {"error": "Book not found"}

## update an specific review for a book using the PUT method
@app.put("/books/{book_id}/reviews/{review_id}")
def update_review(book_id: int, review_id: int, review: Review):
  for book in books_db:
    if book["id"] == book_id:
      for review in book["reviews"]:
        if review["id"] == review_id:
          books_db[book_id]["reviews"][review_id] = review.dict()
          return {"message": "Review updated successfully"}
      return {"error": "Review not found"}
  return {"error": "Book not found"}

## delete a review for a book using the DELETE method

@app.delete("/books/{book_id}/reviews/{review_id}")
def delete_review(book_id: int, review_id: int):
  for book in books_db:
    if book["id"] == book_id:
      for review in book["reviews"]:
        if review["id"] == review_id:
          book["reviews"].remove(review)
          return {"message": "Review deleted successfully"}
      return {"error": "Review not found"}
  return {"error": "Book not found"}