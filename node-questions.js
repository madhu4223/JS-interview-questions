// 1. How do you close a node.js server?
// there are two ways to close
 process.exit(code)

// this will force close the server  
// where code value of 0 indicates that the process terminated successfully, non zero indicates process terminated with an error

// another way is 
server.close() 
// ---> this will stop the HTTP server from accepting new connections, all existing connections are kept.


// 2. what is a middle ware or middle ware function?
    // middle ware is a function which has access to both request and response objects and next function.
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

