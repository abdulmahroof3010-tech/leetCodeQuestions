

function  firstUniqChar(s){
    let count={};

    for(let i=0;i<s.length;i++){
        if(count[s[i]]){
            count[s[i]]++;
        }else{
            count[s[i]]=1
        }
    }

    for(let i=0;i<s.length;i++){
        if(count[s[i]]===1){
            
            return i
        }
    }
    return -1


}

console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar( "loveleetcode"))
console.log(firstUniqChar("aabb"))
