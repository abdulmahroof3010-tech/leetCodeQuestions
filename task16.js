Array.prototype.last=function(){
    if(this.length>0){
        return this[this.length-1]
    }

    return -1
}

console.log([null, {}, 3].last())
console.log([].last())

