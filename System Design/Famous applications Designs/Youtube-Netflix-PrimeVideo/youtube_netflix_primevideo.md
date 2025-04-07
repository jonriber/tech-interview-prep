# Designing Youtube/Netflix/Primevideo

Desired Features:

- Upload
- Search
- View
- Adult content recognition

Design Pillars:

- Scalable
- Resilient
- Secure
- Cost effective

## Storage

Storage critical considerations:

- Videos can be stored in S3 Service
- Metadata can be stored in ElasticSearch DB

## View

When an upload happens, several file extensions and encoding for the same video are made.

Those convertions are made with Amazon Elemental Media Convert.

## Adult Content

Amazon Recognition is a pre-trained ML, that uses some image recognition on your video, to tag explicit content.

If it finds something, it will update the database.

## Parallel processing

S3 services for example, could trigger a lambda function, which invokes a stepFn, that is resposible for breaking down 
each process and handle it automatically.

## Content delivery network

Basically, setup of servers on different regions, with specific content for each region.

It helps on scalability and high availability for fast content delivery.

