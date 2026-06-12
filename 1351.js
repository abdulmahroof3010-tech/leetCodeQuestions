function countNegative(grid){
    let count=0;

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] < 0){
                count++
            }
        }
    }
    return count

}

console.log(countNegative([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))
console.log(countNegative([[3,2],[1,0]]))