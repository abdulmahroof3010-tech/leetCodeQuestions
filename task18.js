function record(operations){
        let reccord=[];

        for(let i=0;i<operations.length;i++){
            if(!isNaN(operations[i])){
                reccord.push(Number(operations[i]))
            }else if(operations[i]==="+"){
                let sum=reccord[reccord.length-1]+reccord[reccord.length-2];
                reccord.push(sum)
            }else if(operations[i]==="D"){
                let double=reccord[reccord.length-1]*2;
                reccord.push(double)
            }else if(operations[i]==="C"){
                reccord.pop()

            }
        }

        let sum=0;
        for(let i=0;i<reccord.length;i++){
            sum+=reccord[i];
        }

        return sum
}

console.log(record(["5","-2","4","C","D","9","+","+"]))