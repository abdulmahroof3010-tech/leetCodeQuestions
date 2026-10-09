function longestSubstring(s){
    let left=0;
    let right =0;
    let set=new Set();
    let length=0;
    let totallength=0;


    while(right<s.length){
        while(set.has(s[right])){
             set.delete(s[left]);
            left++
       
            
     }

      set.add(s[right]);
            
            right++;

            length=right-left
            console.log(length)

        if(length>totallength){
            totallength=length
        }
    }

    return totallength


    

}

console.log(longestSubstring("pwwkew"))
// console.log(longestSubstring("abcabcbb"))
// console.log(longestSubstring("bbbbb"))
