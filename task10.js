let argumentLength=function(...args){
    return args.length
}

console.log(argumentLength(5))
console.log(argumentLength({},null,"3"))
console.log(argumentLength())
