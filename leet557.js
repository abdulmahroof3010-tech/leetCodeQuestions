function reverse(s){

    let words=s.split(" ")
    let arr=[]
    
    for(let i=0;i<words.length;i++){
        let temp="";
        for(let j=words[i].length-1;j>=0;j--){
            temp+=words[i][j];
             }
             arr.push(temp);
        }
     

        return arr.join(" ")

}

console.log(reverse( "Let's take LeetCode contest"));
console.log(reverse( "Mr Ding"));
