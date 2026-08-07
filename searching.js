/* 704. Binary Search

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4

*/

function search(nums, target) {
  
    let l = 0;
    let r = nums.length-1;
  
    while(r>=l){
     let mid = Math.floor((l+r)/2);
     if(target==nums[mid]){
        return mid;
     } else if(target>nums[mid]) {
        l = mid+1;
     } else {
        r = mid-1;
     }
    }
    return -1;
  
  };
  
  let nums = [-1,0,3,5,9,12];
  let result = search(nums,9);
  console.log(result);