function isPerfectSquare(num){
    
    for (let i = 1 ;i<=num;i++){
        if(i*i===num){
            return true
        }else if(i*i >num){
            return false
        }
    }
    return false

}


console.log(isPerfectSquare(16))
console.log(isPerfectSquare(14))
console.log(isPerfectSquare(1))

