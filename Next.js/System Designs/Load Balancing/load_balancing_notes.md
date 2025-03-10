# Load Balancing

Load Balancer is the one responsible for checking which service instances of a specific functionality is avaiable and 
redirect the request for the correct target.

It also checks when instances are off-line and scale up when needed.

## ALB (Application Load Balancer)

Using the path of your application, you can distribute them to different parts of the application.

Example:

``` markdown
API ROUTE = store/get -------> VM1 that holds the microservice responsible for handling the GET HTTP Request
API ROUTE = store/Create -------> VM2 that holds the microservice responsible for handling the POST HTTP Request
API ROUTE = store/update -------> VM3 that holds the microservice responsible for handling the PUT HTTP Request
API ROUTE = store/delete -------> VM4 that holds the microservice responsible for handling the DELETE HTTP Request

```

Characteritics:

- Operates on OSI layer 7
- Routes Traffic based on url path
- Validates and terminates SSL

## NLB (Network Load Balancer)

Port specifications are made.

Handles spiky traffic better.

