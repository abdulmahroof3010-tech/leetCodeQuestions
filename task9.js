let compose=function(functions){
    return function(x){

    }
}

console.log(compose([x=>x+1,x=>x*x,x=>2*x])(4))
console.log(compose([x=>10*x,x=>10*x,x=>10*x])(1))
console.log(compose([])(42))
