function detectCaps(word){

    let allCap=word.toUpperCase();
    let allsmal=word.toLowerCase();
    let firstCap=word[0].toUpperCase()+word.slice(1).toLowerCase();

    if( word===allCap || word===allsmal ||word=== firstCap){
        return true
    }

    return false

}

console.log(detectCaps("USA"))
console.log(detectCaps("leetcode"))
console.log(detectCaps("Google"))
