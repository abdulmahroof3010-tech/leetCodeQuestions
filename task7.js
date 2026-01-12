var map = function(arr, fn) {
    let arry=[]

    for(let i=0;i<arr.length;i++){
        arry.push(fn(arr[i],i))
    }
    return arry
};