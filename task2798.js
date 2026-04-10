function numberOfEmployees(hours,targer){
    let count=0;
    for (let i=0;i<=hours.length;i++){
        if(hours[i]>=targer){
            count++;
        }
    }
 return count
}

console.log(numberOfEmployees([0,1,2,3,4],2))
console.log(numberOfEmployees([5,1,4,2,2],6))
