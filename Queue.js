const createQueue = ()=>{
    const items = []

    const enqueue = (val)=>{
        items.unshift(val)
    }
    const dequeue = ()=>{
        if(isEmpty()) return  null
        return items.pop()
    }
    const isEmpty = ()=>{
        return !items.length
    }
    const size = ()=>{
        return items.length
    }
    const print = () =>{
        return items;
    }

    return { enqueue, dequeue, isEmpty, size, print}
}

let q = createQueue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.print())
q.dequeue()
console.log(q.print())