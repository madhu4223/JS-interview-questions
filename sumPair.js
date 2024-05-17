// So write a function called Sum Zero which accepts a sorted array of integers so it needs to be sorted  if not a sorted but in order sorted from lowest to highest the function should find the first pair where the sum is zero. So the first pair where you take one number and you add it to another number and it's equal to zero.
//  ex: [-2,-1,0,1,2] ans is [-2,2]


const sumZero  = (arr) =>{
    let left = 0;
    let right = arr.length -1
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0) return [arr[left], arr[right]]
        else if (sum > 0 ) right--
        else left ++
    }
    return [-1]
}

console.log(sumZero([1,1,2,2])) // [-1]
console.log(sumZero([-2,-1,0,1,2] )) // [-2,2]