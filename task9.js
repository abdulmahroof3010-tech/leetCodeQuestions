let compose=function(functions){
    return function(x){
        let val=x;
        let len=functions.length
        for(let i=len-1;i>=0;i--){
            val =functions[i](val)
        }
            return val
    }
    
}

console.log(compose([x=>x+1,x=>x*x,x=>2*x])(4))
console.log(compose([x=>10*x,x=>10*x,x=>10*x])(1))
console.log(compose([])(42))
