

const sumOfArrayElements = (list=[]) =>{
    list = list || []
    return list.reduce((acc, num)=> acc+=num,0)
}

console.log(sumOfArrayElements([1,2,3,4])) // 10
console.log(sumOfArrayElements([2,2,-1])) // 3
console.log(sumOfArrayElements(null)) // 0