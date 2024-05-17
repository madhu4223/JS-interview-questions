// Write a function that accepts two arguments reverse(array, n). You have to return the modified array which is reversed in group of n.
// reverser([1,2,3,5,6,7], 3) -> 3,2,1,7,6,5
// reverser([1,2,3,5,6,7], 2) -> 2,1,5,3,7,6
// reverser([1,2,3,5,6,7], 4) -> 5,3,2,1,7,6


const reverse = (arr, N) =>{
    if(!arr || !arr.length) return -1
    if(arr.length === 1) return arr
    let result = []
    for(let i=0; i<arr.length; i = i+N){
        result = result.concat(arr.slice(i,i+N).reverse())
    }

    console.log(">>>> ", result)
}

reverse([1,2,3,5,6,7], 3)