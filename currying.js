// currying is a way to break down a function that takes multiple arguments into a sequence of functions, 
// each taking only one argument. This makes it easier to reuse and compose functions.

// function curryingAdd(x){
//     return function(y){
//         return function(z){
//             return x+y+z
//         }
//     }
// }

const curryingAdd = x => y => z => x+y+z

console.log(curryingAdd(1)(2)(3))