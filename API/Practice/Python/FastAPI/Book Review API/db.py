from models import Book, Review

def initialize_db(database):
  database.connect()
  database.create_tables([Book, Review])
  database.close()
  
