let maxMinWealth=function(accounts){
    let wealth=0;

    for(let i=0;i<accounts.length;i++){
        let sum =0;
        for (let j=0;j<accounts[i].length;j++){
             sum+=accounts[i][j];

             if(sum >wealth){
                wealth=sum
                

             }
        }
    }
        return wealth

}

console.log(maxMinWealth([[1,2,3],[3,2,1]]))
console.log(maxMinWealth([[1,5],[7,3],[3,5]]))
