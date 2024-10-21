// 1. How do you close a node.js server?
// there are two ways to close
 process.exit(code)

// this will force close the server  
// where code value of 0 indicates that the process terminated successfully, non zero indicates process terminated with an error

// another way is 
server.close() 
// ---> this will stop the HTTP server from accepting new connections, all existing connections are kept.


// 2. what is a middle ware or middle ware function?
    // middle ware is a function which has access to request and response objects and next function.
    // we can do things like validation before navigating to the actual service, and return an error if invalid.

// 3. what is profiler in MongoDB
//  it collects all the detailed information about the DB commands executed against a running DB instance
// The profiler writes this data to the system.profile collection in each profiled database

// 4. what is DB profiling?
// Data profiling evaluates data based on factors such as accuracy, consistency, and timeliness 
// to show if the data is lacking consistency or accuracy or has null values

// 5. what is scaffolding in nodejs
// scaffolding refers to creating the basic structure of your application, like a building's skeleton. This saves you time setting up common elements from scratch.
// ex; using Express framework ==> app.js, package file, routes,services folder

//REPL
// The REPL (Read-Eval-Print Loop) in Node.js is an interactive programming environment that allows you to execute JavaScript code snippets and see the results immediately.

//types of streams in node.JS
// Streams in Node.js are a powerful abstraction for handling data in a continuous flow, 
//allowing you to read or write data piece by piece, instead of loading the entire data set into memory at once. This makes streams particularly useful for handling large amounts of data or working with data from sources like files, network requests, or databases. There are four main types of streams in Node.js:

// Types of Streams
// Readable Streams: These streams allow you to read data from a source. You can consume data from a readable stream in chunks. Examples include reading from a file or receiving data over the network.

// Writable Streams: These streams allow you to write data to a destination. You can send data to a writable stream in chunks. Examples include writing to a file or sending data over the network.

// Duplex Streams: These streams are both readable and writable. They allow you to read and write data at the same time. An example is a TCP socket.

// Transform Streams: These are a type of duplex stream where the output is computed based on the input. They can modify or transform the data as it is read or written. An example is a compression stream.

// STATEful vs STATEless vs RESTful
// 
// STATEful
//-----------------------------------
// Definition: Stateful refers to a system that maintains state information across different requests or interactions. This means that the server retains information about the client's previous interactions and can use this context in subsequent requests.

// Key Characteristics of Stateful Systems:
// Session Management: Stateful systems often use sessions to keep track of user interactions. The server retains client context (e.g., user login status, preferences) between requests.
// Client-Server Relationship: The server can remember past requests from the client, allowing for continuity in interactions.
// Less Scalability: Because the server holds state information, scaling can be more complex, as sessions need to be managed and stored, potentially across multiple servers.


//STATEless
//-----------------------------------
//oppo to above, where there is no context stored. for every request we need to provide all the needed data
//ex; we put token in every request to that api can authenticate as there is no context savede in server here

//RESTful
//----------------------------------
// REST (Representational State Transfer) is an architectural style for designing networked applications. Here are the key characteristics:

// Resources: REST focuses on resources, which are identified by URIs (Uniform Resource Identifiers). Each resource (e.g., a user, a product) can be accessed and manipulated through a standard set of operations.

// HTTP Methods: RESTful services use standard HTTP methods to perform operations on resources:

// GET: Retrieve a resource.
// POST: Create a new resource.
// PUT: Update an existing resource.
// DELETE: Remove a resource.
// Stateless Communication: While RESTful services can be stateless, this is just one of the principles of REST. Each request from a client to the server must contain all the information needed to understand and process the request. The server does not store any client context between requests.

// ******** ^ *********
//          ^
// Relationship Between RESTful and Stateless
// Statelessness in REST: One of the core principles of REST is that it should be stateless. This means that a RESTful API does not store client session data between requests. Each request should be self-contained, allowing for easier scaling and reducing server memory usage.

// Not All APIs Are RESTful: While all RESTful APIs are stateless, not all stateless APIs are RESTful. An API can be designed to be stateless without adhering to all REST principles (e.g., it might not use standard HTTP methods or resource URIs).