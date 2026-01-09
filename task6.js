let  filter = function(arr, fn) {
    let newArry=[];

    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            newArry.push(arr[i])
        }
    }
    return newArry


    
};

console.log(filter([0,10,20,30],function(n){
    return n>10
}));

console.log(filter([1,2,3],function(n,i){
    return i===0
}));

console.log(filter([-2,-1,0,1,2],function(n){
    return n+1
}));