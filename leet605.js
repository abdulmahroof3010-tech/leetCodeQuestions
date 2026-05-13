function canPlaceFlowers(flowerbed,n){

    let num=n;
    
    for(let i=0;i<flowerbed.length;i++){
       if((i==0 || flowerbed[i-1] ===0) && flowerbed[i]===0 &&  (i===flowerbed.length-1 || flowerbed[i+1]===0)){
               flowerbed[i]=1
                 num--
       }

    }
   
    return num<=0;


}

console.log(canPlaceFlowers([1,0,0,0,1],1));
console.log(canPlaceFlowers([1,0,0,0,1],2));
console.log(canPlaceFlowers([1,0,0,0,0,0,1],2));
console.log(canPlaceFlowers([1,0,0,0,0,0,1],3));
console.log(canPlaceFlowers([0,0,1,0,1],1))


