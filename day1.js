let  createCounter = function(n) {
    
    return function() {
        return n++
    
        
    };
};

const counter=createCounter(10)
const result=[]
result.push(counter())
result.push(counter())
result.push(counter())
console.log(result)

const counter2=createCounter(-2)
const result2=[]

result2.push(counter2())
result2.push(counter2())
result2.push(counter2())
result2.push(counter2())
result2.push(counter2())

console.log(result2)