function furthestDistanceFromOrgin(moves){

    let l=0; 
    let r = 0 ;
    let d = 0 ;

    for ( let i = 0 ; i < moves.length ; i++ ){
        if (moves[i] === "L") l++;
        if (moves[i] === "R") r++;
        if (moves[i] === "_") d++;

    }

    

}

console.log(furthestDistanceFromOrgin( "L_RL__R"))
console.log(furthestDistanceFromOrgin( "_R__LL_"))
console.log(furthestDistanceFromOrgin( "_______"))
console.log(furthestDistanceFromOrgin( "R_"))

