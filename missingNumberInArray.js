// Q: Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.
// Input:
// N = 5
// A[] = {1,2,3,5}
// Output: 4

const missingNumber = (array, n) => {
    //bruteforce
    // while(n>=0){
    //     if(!array.includes(n)) {
    //         return n

    //     }
    //     n= n-1
    // }

    //optimized
    // sum of first N numbers ==> (n * (n + 1)) / 2
    const actualSum = (n * (n + 1)) / 2
    const currentSum = array.reduce((sum, val) => sum + val, 0)
    return actualSum - currentSum

}