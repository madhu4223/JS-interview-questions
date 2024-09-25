//1. what is chaining in JS?

// Ans:  chaining allows us to run multiple methods on the same element within a single statement.

//2. what is optional chaining?

//  Ans: Optional chaining (operator (?.)) is a JavaScript feature that allows you to access nested properties of an object without having to check for null or undefined values.
// If any of the properties or methods in the chain are null or undefined, the expression will evaluate to undefined instead of throwing an error.
// ex:
 console.log(user.address?.street); 

//3. what is destructuring in javascript
// Ans: Destructuring is a JavaScript expression that allows you to extract data from arrays, objects, and maps and set them into new, distinct variables. 
// It allows you to extract multiple properties, or items, from an array or object at a time.
// ex:
const myArr = [1, 2, 3];
const [firstItem, secondItem] = myArr;

console.log(firstItem); // 1
console.log(secondItem); // 2

