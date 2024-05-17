// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const anagram = (str1, str2) =>{
    if(str1.length !== str2.length) return false
    let freq1 = {}
    let freq2 = {}

    for(let char of str1){ // for ... of loop ****
        freq1[char] = (freq1[char] || 0)+ 1
    }

    for(let char of str2){ // for ... of loop ****
        freq2[char] = (freq2[char] || 0)+ 1
    }

    for(let key in freq1){
        if(freq1[key] !== freq2[key]) return false
    }
    return true;
}

console.log("is Anagram : ",anagram("awesome", "awesoem")) // true
console.log("is Anagram : ",anagram("aza", "aaz")) // true
console.log("is Anagram : ",anagram("aza", "azz")) // false