function sumOfMultipule(n){
    let sum=0;

    for(let i=1;i<=n;i++){
        if(i%3===0 || i%5===0 || i%7===0){
            sum+=i
        }
    }
    return sum

}

console.log(sumOfMultipule(7))
console.log(sumOfMultipule(10))
console.log(sumOfMultipule(9))
console.log(sumOfMultipule(15))
console.log(sumOfMultipule(26))
