// find the duplicate numbers from the given arrray of numbers

//method: 1 using set

const duplicates = (a) => {
    //your code here
    let numset = new Set()
    let duplicates = []
    a.forEach(val => {
        if (numset.has(val) && !duplicates.includes(val)) duplicates.push(val)
        else numset.add(val)
    })
    if (!duplicates.length) return [-1]
    return duplicates
}

const res = duplicates([2, 0, 3, 3, 1])
console.log(res)


// method 2 using filter

const duplicates2 = (a) => {
    //your code here
    return a.filter((value, index, self) => {
        return self.indexOf(value) !== index
    })
}

// method 3 using reduce

const duplicates3 = (a) => {
    const freq = a.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1
        return acc
    }, {})
    return Object.keys(freq).filter(key => freq[key] > 1)
}