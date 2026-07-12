/* 26. Remove Duplicates from Sorted Array

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

*/

function removeDuplicates(nums){
   let x = 0;
   for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[x]){
          x=x+1;
          nums[x] = nums[i];
        }
   }
   return x+1;
}

let nums   = [0,0,1,1,1,2,2,3,3,4];
let result = removeDuplicates(nums);

