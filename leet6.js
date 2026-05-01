function zigzag(s,numRow){
    if(numRow===1) return s;

    let row=new Array(numRow).fill("");

    let currentRow =0;
    let direction=1;

    for (let i=0;i<s.length;i++){
        row[currentRow]+=s[i];

        if(currentRow===0) direction=1;
        else if(currentRow ===numRow-1)direction=-1;

        currentRow+=direction
    }

    return row.join("")


}

console.log(zigzag("PAYPALISHIRING",3))
console.log(zigzag("PAYPALISHIRING",4))
console.log(zigzag("A",1))
