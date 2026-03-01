function reverse(s){

    let result=[];

    for(let i=0;i<s.length;i++){
        result.unshift(s[i])
    }
    return result

}

console.log(reverse(["h","e","l","l","o"]))