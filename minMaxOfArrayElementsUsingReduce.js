
const minMax = (list=[])=>{
    return list.reduce((acc, currentEle)=>{
        acc.min = currentEle < acc.min ? currentEle : acc.min
        acc.max = currentEle > acc.max ? currentEle : acc.max
        return acc;
    },{min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER})
}

console.log(minMax([1,2,3,4])) // 1, 4
console.log(minMax([-1,2,3,4])) // -1, 4