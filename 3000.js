  function areaOfMaxDiagonal(dimensions){
    let maxDiagonal=0;
    let maxarea=0;

    for(let i=0;i<dimensions.length;i++){
        let diagonal=Math.sqrt(dimensions[i][0]*dimensions[i][0]+dimensions[i][1]*dimensions[i][1])
        let area=dimensions[i][0]*dimensions[i][1]
        if(maxDiagonal<diagonal){
            maxDiagonal=diagonal
            maxarea=area

        }else if(maxDiagonal===diagonal){
            if(maxarea<area){
                maxarea=area
            }
        }
    }

    return maxarea

  }

  console.log(areaOfMaxDiagonal([[9,3],[8,6]]))
  console.log(areaOfMaxDiagonal([[3,4],[4,3]]))
