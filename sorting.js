
 /* Bubble Sort

Input: nums = [5,2,4,1]
Output: [1,2,4,5]

*/

function BubbleSort(nums) {
    let n = nums.length;
  
    let isSwapped = false;
    
    for (let i=0; i<n-1; i++) {
      for (let j=0; j< n-1-i; j++) {
         if (nums[j]>nums[j+1]) {
            let temp = nums[j];
            nums[j] = nums[j+1];
            nums[j+1] = temp;
            isSwapped = true;
         }
      } 
      if(!isSwapped) break;
    }
    return nums;
  };
  
  let nums = [5,2,4,1];
  console.log(nums.length);
  
  let result = BubbleSort(nums,9);
  console.log(result);
  

  /* Selection sort 
  
  */

  function SelectionSort(nums) {
    let n = nums.length;
    
    for (let i=0; i<n-1; i++) {
      let min = i;
      for (let j=i+1; j< n; j++)  {
         if(nums[j]<nums[min]){
           min = j;
         }
      } 
      if(min!=1){
        let temp = nums[i];
        nums[i]  = nums[min];
        nums[min]=temp;
      }
    }
    return nums;
  };
  
  let nums = [5,2,4,1];
  
  let result = SelectionSort(nums,9);
  console.log(result);

  /* Insertion Sort */

  
  function InsertionSort(nums) {

    for (let i=1; i<nums.length; i++) {
        let curr = nums[i];
        let prev = i-1;
        
        while(nums[prev]>curr && prev>=0){
            nums[prev+1] = nums[prev];
            prev--;
        }
        nums[prev+1]=curr;
    }
    return nums;
};
  
  let nums = [7,4,3,5,1,2];
  
  let result = InsertionSort(nums,9);
  console.log(result);


  ?/* Merge Sort

912. Sort an Array
Input: nums = [5,2,3,1]
Output: [1,2,3,5]

*/

var sortArray = function(nums) {
  if(nums.length<=1)return nums;
  let mid  = Math.floor(nums.length/2);
  let left = sortArray(nums.slice(0,mid));
  let right= sortArray(nums.slice(mid));
  return merge(left,right);
};

function merge(left,right){
  let res = [];
  let i   = 0;    
  let j   = 0;

  while(i<left.length&&j<right.length){
      if(left[i]<right[j]){
          res.push(left[i]);
          i++;
      } else {
          res.push(right[j]);
          j++;
      }
  }
   
  return [...res, ...left.slice(i), ...right.slice(j)];

}

let nums = [7,4,3,5,1,2];
console.log(sortArray(nums));
