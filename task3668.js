function recoverOrder(order,friends){
    let result=[];

    for(let i =0;i<order.length;i++){
        for (let j=0;j<friends.length;j++){
            if(order[i]===friends[j]){
                result.push(order[i])
            }
        }
    }
 return result
}

console.log(recoverOrder([3,1,2,5,4],[1,3,4]))
console.log(recoverOrder([1, 4, 5, 3, 2],[2,5]))