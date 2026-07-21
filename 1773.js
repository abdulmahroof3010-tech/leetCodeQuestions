function countMatches(items, ruleKey,ruleValue){
//   let count =0;
//   for(let i=0;i<items.length;i++){
   
//         if(ruleKey==="type"){
//            if(items[i][0]===ruleValue){
//             count++
//            }
//         }else if(ruleKey==="color"){
//             if(items[i][1]===ruleValue){
//                 count++
//             }
//         }else if(ruleKey==="name"){
//             if(items[i][2]===ruleValue){
//                 count++
//             }
        
//    }
    
//   }
//   return(count)

let count=0;
let index;
if(ruleKey==="type"){
    index=0
}else if(ruleKey==="color"){
    index=1
}else {
    index=2
}
 for(let i=0;i<items.length;i++){
    if(items[i][index]===ruleValue){
        count++
    }
 }
return count

}

console.log(countMatches([["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"]],ruleKey =
"name",ruleValue ="qqqq"))
// console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"));
// console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"))