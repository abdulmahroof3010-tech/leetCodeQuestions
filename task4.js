let gcdOfOddEvenSums = function(n) {
    let sumOdd=0;
    let sumEven=0;

    for(let i=1;i<=n;i++){
        if(i%2===0){
            sumEven+=i;
        
        }else{
            sumOdd+=i
        }
    }
    // 
    return sumEven
    
};

console.log(gcdOfOddEvenSums(4))