// https://www.geeksforgeeks.org/problems/second-largest3735/1?page=1&difficulty=Easy&sortBy=submissions

// Given an array Arr of size N, print the second largest distinct element from an array. 
// If the second largest element doesn't exist then return -1.

const print2largest = (arr, n) => {
    //code here
    if (!arr || arr.length < 2) return -1
    const uniqueSet = [... new Set(arr)]// to remove duplicates
    const sorted = uniqueSet.sort((a, b) => b - a)
    return sorted.length > 1 ? sorted[1] : -1;
}