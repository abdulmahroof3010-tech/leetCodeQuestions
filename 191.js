function hammingWeigh(n){

  let setBit=0;
  
  while(n>0){
    let reminder=n%2;
    
    let whole=Math.floor(n/2);
    if(reminder===1){
        setBit++
    }
    n=whole
  }
  return setBit

}

console.log(hammingWeigh(11))
console.log(hammingWeigh(128))
console.log(hammingWeigh(2147483645))
