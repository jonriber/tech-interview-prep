from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from models import Book, Review

SQLALCHEMY_DATABASE_URL = "postgresql://postgres:admin@localhost/book_review_db"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def initialize_db(database):
  database.connect()
  database.create_tables([Book, Review])
  database.close()
  
