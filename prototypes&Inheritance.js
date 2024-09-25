// In JavaScript, prototypes are a mechanism used for inheritance. Every object has a prototype, which provides access to properties and methods that are not defined on the object itself. This allows objects to inherit features from other objects, without having to duplicate the code.
// The prototype of an object is an object that is used to look up properties that are not defined on the object itself. When you try to access a property on an object, JavaScript will first look for the property on the object itself. If the property is not found on the object, JavaScript will then look for the property on the object's prototype. This process continues up the prototype chain until the property is found or the prototype chain is exhausted.
// The prototype of an object can be accessed using the Object.getPrototypeOf() method. This method returns the prototype of the specified object.
// For example, the following code creates a new object called obj:


const obj = {};
// The prototype of obj is the Object.prototype object. This object contains a number of properties and methods that are common to all objects in JavaScript.
// The following code tries to access the toString() property on obj:


console.log(obj.toString());

// The toString() property is not defined on obj itself, so JavaScript will look for the property on obj's prototype. The toString() property is defined on the Object.prototype object, so JavaScript will return the value of the toString() property from the Object.prototype object.
// You can also add properties and methods to the prototype of an object. This will allow all objects that inherit from the prototype to access the properties and methods.
// For example, the following code adds a greet() method to the Object.prototype object:

Object.prototype.greet = function() {
  console.log('Hello, world!');
};
// Now, all objects in JavaScript will have access to the greet() method.
// The following code creates a new object called obj2:
// JavaScript

const obj2 = {};
// The prototype of obj2 is the Object.prototype object, so obj2 will have access to the greet() method.
// The following code calls the greet() method on obj2:
// JavaScript

obj2.greet();
// This will print the message Hello, world! to the console.
// Prototypes are a powerful feature of JavaScript that allows you to create reusable code and to inherit features from other objects.