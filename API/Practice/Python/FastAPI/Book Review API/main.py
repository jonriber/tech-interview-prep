from fastapi import FastAPI, Depends, HTTPException
from models import Review, Book, Base
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from database import SessionLocal, engine
from typing import List



# ## Data base Mock 

books_db = [
  {"id": 1, "title": "1984", "author": "George Orwell", "description": "Dystopian novel.", "reviews": []},
  {"id": 2, "title": "To Kill a Mockingbird", "author": "Harper Lee", "description": "Classic novel.", "reviews": []}
]

Base.metadata.create_all(bind=engine)

app = FastAPI()

async def get_db() -> AsyncSession:
  async with SessionLocal() as session:
    yield session



