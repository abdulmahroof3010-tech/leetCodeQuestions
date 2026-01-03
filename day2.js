let expect=function(val){
    return{
         toBe:(v)=> (v===val)? true :(()=>{ throw new Error("Not Equal")})(),
         notToBe:(v) => (v !==val )? true :(()=>{ throw new Error("Equal")})(),
    }
}

console.log(expect(5).toBe(5))
console.log(expect(5).toBe(null))
console.log(expect(5).notToBe(null))