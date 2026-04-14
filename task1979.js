function findGCD(nums){
    let largest=nums[0];
    let smallest=nums[0];

    for(let i=0;i<nums.length;i++){
        if(nums[i]>largest){
            largest=nums[i];
        }
        if(nums[i]<smallest){
            smallest=nums[i];
        }
    }
    
    while(smallest !==0){
        let  temp=smallest;
        smallest=largest%smallest;
        largest=temp;
    }

    return largest
    
    }


console.log(findGCD([2,5,6,9,10]));
console.log(findGCD([7,5,6,8,3]));
console.log(findGCD([3,3]));