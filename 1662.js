function arrayStringsAreEqual(word1,word2){

    let arr1=word1.join("");
    let arr2=word2.join("");


    return arr1===arr2



}

console.log(arrayStringsAreEqual (["ab", "c"], ["a", "bc"]))
console.log(arrayStringsAreEqual(["a", "cb"],  ["ab", "c"]))
console.log(arrayStringsAreEqual(["abc", "d", "defg"],["abcddefg"]))