# REST FUL API

RESTful API is an interface that two computer systems use to exchange information securely over the internet.
Most business applications have to communicate with other internal and third-party applications to perform various
tasks. For example, to generate monthly payslips, your internal accounts system has to share data with your customer's
banking system to automate invoicing and communicate with an internal time sheet application. RESTful APIs support
this information exchange because they follow secure, reliable, and efficient software communication standards.

## What is REST?

Representational State Transfer (REST) is a software architecture that imposes conditions on how an API should work.
REST was initially created as a guideline to manage communication on a complex network like the internet.
You can use REST-based architecture to support high-performing and reliable communication at scale. You can easily
implement and modify it, bringing visibility and cross-platform portability to any API system.

### Uniform interface

The uniform interface is fundamental to the design of any RESTful webservice. It indicates that the server transfers
information in a standard format. The formatted resource is called a representation in REST. This format can be
different from the internal representation of the resource on the server application. For example, the server can store
data as text but send it in an HTML representation format.

Uniform interface imposes four architectural constraints:

- Requests should identify resources. They do so by using a uniform resource identifier.
- Clients have enough information in the resource representation to modify or delete the resource if they want to.
The server meets this condition by sending metadata that describes the resource further.
- Clients receive information about how to process the representation further. The server achieves this by sending
self-descriptive messages that contain metadata about how the client can best use them.
- Clients receive information about all other related resources they need to complete a task. The server achieves
this by sending hyperlinks in the representation so that clients can dynamically discover more resources.

### Statelessness

In REST architecture, statelessness refers to a communication method in which the server completes every client
request independently of all previous requests. Clients can request resources in any order, and every request is
stateless or isolated from other requests. This REST API design constraint implies that the server can completely
understand and fulfill the request every time.

### Layered system

In a layered system architecture, the client can connect to other authorized intermediaries between the client and
server, and it will still receive responses from the server. Servers can also pass on requests to other servers.
You can design your RESTful web service to run on several servers with multiple layers such as security, application,
and business logic, working together to fulfill client requests. These layers remain invisible to the client.

### Cacheability

RESTful web services support caching, which is the process of storing some responses on the client or on an
intermediary to improve server response time. For example, suppose that you visit a website that has common header
and footer images on every page. Every time you visit a new website page, the server must resend the same images.
To avoid this, the client caches or stores these images after the first response and then uses the images directly
from the cache. RESTful web services control caching by using API responses that define themselves as cacheable or
noncacheable.

### Code on demand

In REST architectural style, servers can temporarily extend or customize client functionality by transferring
software programming code to the client. For example, when you fill a registration form on any website, your
browser immediately highlights any mistakes you make, such as incorrect phone numbers. It can do this because
of the code sent by the server.

## How does it work and how to implement a basic one?

The basic function of a RESTful API is the same as browsing the internet. The client contacts the server by using the
API when it requires a resource. API developers explain how the client should use the REST API in the server

application API documentation. These are the general steps for any REST API call:

- The client sends a request to the server. The client follows the API documentation to format the request in a way
that the server understands.
- The server authenticates the client and confirms that the client has the right to make that request.
- The server receives the request and processes it internally.
- The server returns a response to the client. The response contains information that tells the client whether the
request was successful. The response also includes any information that the client requested.
- The REST API request and response details vary slightly depending on how the API developers design the API.

## How to make it scalable?

Systems that implement REST APIs can scale efficiently because REST optimizes client-server interactions.
Statelessness removes server load because the server does not have to retain past client request information.
Well-managed caching partially or completely eliminates some client-server interactions. All these features support
scalability without causing communication bottlenecks that reduce performance.

## What best practices to follow?