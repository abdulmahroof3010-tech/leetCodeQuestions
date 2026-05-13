function findWordsCount(words,x){
    let index=[]
    for(let i=0;i<words.length;i++){
        if(words[i].includes(x)){
            index[index.length]=i
        }
    }

    return index

}

console.log(findWordsCount(["leet","code"],"e"))
console.log(findWordsCount(["abc","bcd","aaaa","cbc"],"a"))
console.log(findWordsCount(["abc","bcd","aaaa","cbc"],"z"))
