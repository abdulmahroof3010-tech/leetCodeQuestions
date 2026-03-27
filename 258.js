function addDigits(num){
    while(num >=10){
        num=num.toString().split("").reduce((sum,a)=>sum+Number(a),0)
    }
    return num
    
}

console.log(addDigits(38))
console.log(addDigits(0))
console.log(addDigits(33))
console.log(addDigits(23))
console.log(addDigits(45))
console.log(addDigits(34))
console.log(addDigits(55))


