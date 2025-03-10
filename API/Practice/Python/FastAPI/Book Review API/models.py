from pydantic import BaseModel
from typing import List

class Review(BaseModel):
  id: int
  book_id: int
  user: str
  rating: int
  review: str
  
class Book(BaseModel):
  id: int
  title: str
  author: str
  description: str
  reviews: List[Review] = []
  
