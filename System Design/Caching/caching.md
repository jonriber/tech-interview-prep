# Caching mechanism

## Why?

![alt text](image.png)

Backend runs complex queries, taking capacity from DBs. DBs are slower to responde, usually are on disk.

![alt text](image-1.png)

Cache install a subset of DB on memory, which is much faster.

Now, backend checks cache first for the data. If data is not found on cache, then checks database.

## Cache Deletion

- Cache entries deleted after a specified time
- TTL
- Cache entries can be updated with backend code
- Cache is just another database, smaller and faster on your system

## Different types os caching

![alt text](image-2.png)

- Use managed caching of the service, API gateway caching
- If service doesn´t provide caching

Traditional system design
![alt text](image-3.png)