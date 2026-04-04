// function findClosest(x,y,z){
//     let personOneStep=0;
//     let personTowStep=0;

//     while(x !==z){
//     if(x <z){
//         personOneStep++;
//         x++;
//     }else{
//         personOneStep++;
//         x--
//     }
//     }

//     while(y !==z){
//         if(y < z){
//             personTowStep++;
//             y++;
//         }else{
//             personTowStep++;
//             y--;
//         }
//     }

//     if(personOneStep <personTowStep){
//        return 1 
//     }else if(personOneStep===personTowStep){
//         return 0
//     }else{
//         return 2
//     }

// }


//with build in function

function findClosest(x,y,z){
    let personOneStep=Math.abs(x-z);
    let personTowStep=Math.abs(y-z);

    if(personOneStep <personTowStep){
        return 1;
    }else if(personOneStep=== personTowStep){
        return 0;
    }else{
        return 2
    }
}



console.log(findClosest(2,7,4));
console.log(findClosest(2,5,6));
console.log(findClosest(1,5,3));
