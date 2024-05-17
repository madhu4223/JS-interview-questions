// https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1


// Given an array A of positive integers. Your task is to find the leaders in the array. 
// An element of array is a leader if it is greater than or equal to all the elements to its right side. 
// The rightmost element is always a leader. 


//bruteforce

const leaders = (arr, n) => {
    // code here
    let leaders = []
    for (let i = 0; i < n - 1; i++) {
        let rem = arr.slice(i + 1)
        const greater = rem.filter(v => v > arr[i])
        if (!greater.length) leaders.push(arr[i])
    }
    leaders.push(arr[n - 1])
    return leaders
}


//optimized
// can use a single loop and traverse the array from right to left. T
// this way, you can keep track of the maximum element encountered so far and identify leaders efficiently.


const leaders2 = (arr, n) => {
    let leaders = []
    let max = Number.MIN_SAFE_INTEGER
    for (let i = n - 1; i >= 0; i--) {
        if (i === n - 1) {
            max = arr[i]
            leaders.push(arr[i])
        }
        else if (arr[i] >= max) {
            max = arr[i]
            leaders.unshift(max)
        }

    }
    return leaders
}