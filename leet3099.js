function sumOfDigitsOfHashedNumbers(x){
    let sum=0;
    let y=x;

    while(y>0){
        let temp=y%10;
        sum+=temp;
        y=Math.floor(y/10);
    };

    if(x%sum===0){
        return sum
    }else{
        return -1
    }

}

console.log(sumOfDigitsOfHashedNumbers(18))
console.log(sumOfDigitsOfHashedNumbers(23))
