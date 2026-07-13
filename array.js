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


/* 27. Remove Element

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]

*/

function removeElement(nums, val){
  
    let x=0;
    for(let i=0;i<nums.length;i++){
       if(nums[i]!=val){
           nums[x]=nums[i];
           x=x+1; 
       }
    }
    return x;
}

let nums = [3,2,1,5,3,4,8,3];
let val  = 3;

let result = removeElement(nums,val);

console.log(result);

/* 344. Reverse String

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

*/

function reverseString(s){
  let len = s.length;
  let halflen = Math.floor(len/2);

  for(let i=0; i<halflen; i++){
    let sCopy = s[i];
    s[i] = s[len-1-i];
    s[len-1-i]=sCopy;
  }

  return s;
}

let s = ["h","e","l","l","o"];
let result = reverseString(s);
console.log(result);
