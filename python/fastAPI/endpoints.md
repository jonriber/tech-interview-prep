# FastAPI - Endpoints

## Parameter types

- Query parameters
- Request body
- Path parameters
- Header parameters

### Query parameters

If the endpoint has parameters with default values or no Pydantic model, they're likely expected as query parameters.

Example:

```python
@app.get("/items/")
def read_item(name: str):
  ...

```

Usage: calling from the frontend: `GET /items/?name=foo`

### Request Body

When using a `Pydantic model`, FastAPI expects the data in the body.

Example:

```python
class Item(BaseModel):
  name: str
  price: float

@app.post("/items/")
def create_item(item: Item):
  ...
```

Usage: Frontend sends
```json
{
  "name": "Table",
  "price": 50.0
}
```

### Path Parameters

If the argument is part of the URL path.

Example:

```python
@app.get("/items/{item_id}")
def read_item(item_id: int):
  ...
```

Usage: call from frontend `GET /items/123`

### Header Parameters

Typically used for things like authentication tokens.

Example:

```python
@app.get("/items/")
def read_item(user_agent: str = Header(...)):
  ...
```

## Interview best anwser

“It depends on how the parameters are defined in FastAPI. If the endpoint expects a Pydantic model, the frontend should 
send the data as JSON in the body. If the parameters are simple types like strings or ints and not part of a model, 
they’re likely query parameters. Headers are usually for things like auth tokens.”