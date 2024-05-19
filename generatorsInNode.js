// Imagine you have a toy that makes sounds, and you can press a button to hear one sound at a time. You have to press the button each time you want to hear the next sound. In a way, you're in control of when you hear the next sound.

// In Node.js, a generator is like that toy. It's a special kind of function that you can pause and then resume later. When you call the generator function, it doesn't run all at once. Instead, it gives you a way to "press a button" to get the next value it generates.

// Ex: Imagine we're making a generator that counts numbers for you, one at a time.

function* countNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

//using generator

const counter = countNumbers()

console.log(counter.next().value) //1
console.log(counter.next().value) //2
console.log(counter.next()) // { value: 3, done: false }

console.log(counter.next())

// for first 3 calls it returns      //  It returns { value: 1, done: false }.
// value: 1 because that's the first value yielded.
// done: false because the generator is not finished yet.

// last time (4th time) { value: undefined, done: true } ==> because the generator has finished executing.