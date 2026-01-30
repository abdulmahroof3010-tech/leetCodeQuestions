function differenceOfSum(n,m){
     let divisible=0;
     let notDivisble=0;
     
     for(let i=1;i<=n;i++){
        if(i%m===0){
            divisible+=i
        }else{
            notDivisble+=i
        }
     }
     return notDivisble-divisible

}

console.log(differenceOfSum(10,3))
console.log(differenceOfSum(5,6))
console.log(differenceOfSum(5,1))
