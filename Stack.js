const createStack = () => {
    let items = []
    const push = (val) => {
        items.push(val)
    }
    const pop = () => {
        if (isEmpty()) return null
        return items.pop()
    }
    const size = () => {
        return items.length
    }
    const isEmpty = () => {
        return !items.length
    }
    const peek = () => {
        if (isEmpty()) return null
        return items[size() - 1]
    }
    const print = () => {
        return items
    }
    return { push, pop, size, isEmpty, print, peek }
}

let s = createStack()
s.push(1)
s.push(2)
s.push(3)
console.log(s.pop())
console.log(s.print())
s.pop()
console.log(s.print())