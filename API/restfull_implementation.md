# REST FUL API

RESTful API is an interface that two computer systems use to exchange information securely over the internet.
Most business applications have to communicate with other internal and third-party applications to perform various
tasks. For example, to generate monthly payslips, your internal accounts system has to share data with your customer's
banking system to automate invoicing and communicate with an internal timesheet application. RESTful APIs support
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

## How to implement a basic one?

## How to make it scalable?

## What best practices to follow?