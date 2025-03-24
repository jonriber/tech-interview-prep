from pydantic import BaseModel

class BookCreate(BaseModel):
  title: str
  author: str
  description: str
  
class ReviewCreate(BaseModel):
  user: str
  rating: int
  review: str