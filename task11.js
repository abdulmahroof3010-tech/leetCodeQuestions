// let lengthOfLastWord=function(s){
//       let text=s.trim().split(" ")
//       let last=text.at(-1)

//       return last.length
// }

let lengthOfLastWord=function(s){
    let i =s.length-1;
    let count=0;

    while( i>=0 && s[i]=== " ") i--

    while (i>=0 && s[i]!== " ") {
        count ++;
        i--
    }
    return count;
}



console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))
