from database import Base, engine
from models import Book, Review

Base.metadata.create_all(bind=engine)