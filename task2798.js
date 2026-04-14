// function numberOfEmployees(hours,targer){
//     let count=0;
//     for (let i=0;i<=hours.length;i++){
//         if(hours[i]>=targer){
//             count++;
//         }
//     }
//  return count
// }

// console.log(numberOfEmployees([0,1,2,3,4],2))
// console.log(numberOfEmployees([5,1,4,2,2],6))

function findUgly(n){
    if(n<=0)return false
    while(n%2===0){
      n =n/2
          
             
     }while(n%3===0){
         n=n/3
         
    }while(n%5===0){
       n=n/5
    }
    
   return n===1
    
}

console.log(findUgly(6))
console.log(findUgly(1))
console.log(findUgly(14))