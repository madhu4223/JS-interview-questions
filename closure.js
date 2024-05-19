// Let's imagine you have a treasure chest with a secret code. You want to keep that code safe, so you put it inside a box. 
// Now, you don't want just anyone to open this box and see the code. But you still want to be able to use the code whenever you need it. So, what do you do?
// You create a special key that can open the box, and only you know where that key is kept. This key is like a closure in JavaScript.
// In JavaScript, a closure is like a special key that allows a function to remember and access the variables from the scope where it was created, even after that scope has finished running. Just like your special key can open the box with the secret code inside, a closure allows a function to access variables from its parent function, even if that parent function has already finished running.


const secretMessage = () =>{
    const code = "secret san"

    const revealCode = () =>{
        console.log(code)
    }
    return revealCode
}

const mySecret = secretMessage()

mySecret()