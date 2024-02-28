// https://www.geeksforgeeks.org/problems/parenthesis-checker2744/1?page=1&difficulty=Easy&sortBy=submissions

const ispar = (x) => {
    //your code here

    // helper code
    const createStack = () => {
        let items = []
        const push = (item) => {
            items.push(item)
        }
        const pop = () => {
            return items.pop()
        }
        const isEmpty = () => {
            return !items.length
        }
        const peek = () => {
            if (isEmpty()) return null
            return items[size() - 1]
        }
        const size = () => {
            return items.length
        }
        return { push, pop, peek, isEmpty, size }
    }

    ///Map object 
    const braceMap = { "(": ")", "{": "}", "[": "]" }

    //main code
    let braces = x.split("")
    let stack = createStack()
    braces.forEach(b => {
        if (stack.isEmpty()) stack.push(b)
        else if(braceMap[stack.peek()] === b) stack.pop()
        else stack.push(b)
    })
    if(stack.isEmpty()) return true
    return false

}