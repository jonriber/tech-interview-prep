import pytest
from src.Dog import Dog

def test_dog_name():
  dog = Dog("zip",1,"border collie")
  assert dog.name == "zip"


if __name__ == '__main__':
    pytest.main()