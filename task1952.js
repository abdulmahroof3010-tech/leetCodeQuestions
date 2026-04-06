function isThree(n){
    if(n===1) return false;

    let count=0;
    for(let i=0; i<=n;i++){
        if(n%i===0){
            count++
        }
    }

    return count ===3

}

console.log(isThree(2));
console.log(isThree(4))