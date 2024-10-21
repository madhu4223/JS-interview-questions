

const manipulateArray = (arr) =>{
    arr.push(5)
    arr = [1]
    return arr;
}

let list = [1,2,3,4]
manipulateArray(list)
console.log("111 ",list)

list = manipulateArray(list)
console.log("222 ", list)


// [1,2,3,4,5]  & [1] when we return the arr from function we are not storing that arr in (manipulateArray (list)) in any variable and 
// when we trying to console list we get modified array because in function we passing that array reference as 
// argument (pass by reference) i.e [1,2,3,4,5,5] and send time when we trying to console the list modified with return array from 
// function and we are storing in variable and we get [1].