function mostWordfound(sentences){
    let maxWords=0;

    for(let i=0;i<sentences.length;i++){
        let words=sentences[i].split(" ").length;
        if(maxWords<words){
            maxWords=words
        }

    }

    return maxWords
}
console.log(mostWordfound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
console.log(mostWordfound(["please wait", "continue to fight", "continue to win"]));
console.log(mostWordfound(["alice and bob love leetcode","this is great thanks very much", "continue to fight","i think so too"]))