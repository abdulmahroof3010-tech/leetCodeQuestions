var map = function(arr, fn) {
    let arry=[]

    for(let i=0;i<arr.length;i++){
        arry.push(fn(arr[i],i))
    }
    return arry
};

function plusOne(n){
    return n+1;
}

function plusI(n,i){
    return n+i;
}

function constant(){
    return 42;
}


console.log(map([1,2,3],plusOne))

console.log(map([1,2,3],plusI))
console.log(map([10,20,30],constant))


