// https://www.geeksforgeeks.org/problems/equilibrium-point-1587115620/1?page=1&difficulty=Easy&sortBy=submissions

// Given an array A of n non negative numbers. The task is to find the first equilibrium point in an array. 
// Equilibrium point in an array is an index (or position) such that the sum of all elements before that index is same as sum of elements after it.

// Note: Return equilibrium point in 1-based indexing. Return -1 if no such point exists. 

const equilibriumPoint = (a, n) => {
    //your code here
    if (a.length === 1) return 1
    let left = 0
    let right = n - 1
    let leftsum = a[left]
    let rightsum = a[right]
    while (left < right) {
        if (leftsum < rightsum) {
            left += 1
            leftsum += a[left]
        }
        else if (rightsum < leftsum) {
            right -= 1
            rightsum += a[right]
        }
        else {
            if (right - left == 2) return left + 2
            left += 1
            right -= 1
            leftsum += a[left]
            rightsum += a[right]
        }
    }
    return -1
}