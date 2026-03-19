function mostWordfound(sentences){
    let maxWords=0;

    for(let i=0;i<sentences.length;i++){
        let words=1;

        for(let j=0;j<sentences[i].length;j++){
            if(sentences[i][j]===" "){
                words++;
            }
        }
        if(maxWords<words){
            maxWords=words
        }
    }

    return maxWords


}

console.log(mostWordfound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
console.log(mostWordfound(["please wait", "continue to fight", "continue to win"]));
console.log(mostWordfound(["alice and bob love leetcode","this is great thanks very much", "continue to fight","i think so too"]))