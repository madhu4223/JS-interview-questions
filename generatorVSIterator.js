//Iterator >>>>>>>

nums = [1,2,3,4,5]
const iterator = nums[Symbol.iterator]()

console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next()) // { value: undefined, done: true }

// Generatore >>>>
console.log("----------------")

function* generator (){
    yield 1;
    yield 2;
}

const gen = generator()
console.log(gen.next().value) // 1
console.log(gen.next().value) // 2
console.log(gen.next().value) // undefined


// read the diff b/w them.

