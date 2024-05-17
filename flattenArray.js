// var a=[[10],[[[20,10]],[99,88]],10,20]
// Print this like 10,20,10,99,88,10,20 
// in JS

const printNestedArrays = (input)=>{
let result = []

    const flattenArray = (arr)=>{
        arr.forEach(e => {
            if(Array.isArray(e)){
                flattenArray(e)
            }else{
                result.push(e)
            }
        });
    }
    flattenArray(input)

    console.log(">>>> ",result.join(","))

}

printNestedArrays([[10],[[[20,10]],[99,88]],10,20])