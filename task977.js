function squareSort(nums){

    let left=0;
    let right=nums.length-1;
    let position=nums.length-1;

    let result=new Array(nums.length)

    while(left<=right ){
        let leftVal=nums[left]*nums[left];
        let rightVal=nums[right]*nums[right];

        if(leftVal>rightVal){
            result[position]=leftVal;
            left++;
        }else{
            result[position]=rightVal;
            right--;
        }
        position--
        }

        return result
}

console.log(squareSort([-4,-1,0,3,10]))
console.log(squareSort([-7,-3,2,3,11]))