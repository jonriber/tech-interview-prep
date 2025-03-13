# from pydantic import BaseModel
# from typing import List
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class Review(Base):
  __tablename__ = "reviews"
  id = Column(Integer, primary_key=True, index=True)
  book_id = Column(Integer, ForeignKey("books.id"))
  user = Column(String, index=True)
  rating = Column(Integer)
  review = Column(String)

  book = relationship("Book", back_populates="reviews")
  
class Book(Base):
  __tablename__ = "books"
  
  id= Column(Integer, primary_key=True, index=True)
  title= Column(String, index=True)
  author= Column(String, index=True)
  description= Column(String, index=True)
  reviews = relationship("Review", back_populates="book")
  
