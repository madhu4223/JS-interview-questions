

const left = () =>{
    return console.log("left")
}

const right = () =>{
    return console.log("right")
}

left() || right()



// Both left and right will be logged because console.log() function returns `undefined` value