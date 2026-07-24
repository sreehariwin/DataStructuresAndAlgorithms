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


/* 
121. Best Time to Buy and Sell Stock

Input: prices = [7,1,5,3,6,4]
Output: 5

*/

function maxProfit(prices) {

  let min  = prices[0];
  let maxPrice = 0; 

 for(let i=1;i<prices.length;i++){
   if(prices[i]-min > maxPrice){
      maxPrice = prices[i]-min;
   }
   if(prices[i]<min){
      min = prices[i];
   }
 }
 return maxPrice;
}

let prices = [1,2];

let result = maxProfit(prices);

console.log(result);

/* 88. Merge Sorted Array

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

*/

// method 1;

function merge(nums1, m, nums2, n){
  let nums1Cpy = nums1.slice(0,m);
  let p1=0;
  let p2=0;
  for(let i=0;i<m+n;i++){
      if(p2 >= n ||(nums1Cpy[p1]<nums2[p2] && p1 < m)){
        nums1[i] = nums1Cpy[p1];
        p1++;
      } else {
          nums1[i] = nums2[p2];
          p2++;
      }
  }

  return nums1;

}


let nums1 = [1,2,3,0,0,0]; 
let m = 3;
let nums2 = [2,5,6]; 
let n = 3;

let result = merge(nums1, m, nums2, n);

console.log(result);

//method 2

function merge(nums1, m, nums2, n){

  let p1 = m-1;
  let p2 = n-1;

  for(let i=m+n-1;i>=0;i--){
     
       if(p2<0){
           break;
       }
    
       if(p1>=0 && nums1[p1]>nums2[p2]) {
           nums1[i] = nums1[p1];
           p1--;
       } else {
           nums1[i] = nums2[p2];
           p2--;
       }
   }
   return nums1;
}
 
 
 let nums1 = [1,2,3,0,0,0]; 
 let m = 3;
 let nums2 = [2,5,6]; 
 let n = 3;
 
 let result = merge(nums1, m, nums2, n);
 
 console.log(result);

 /* 283. Move Zeroes

 Input: nums = [0,1,0,3,12]
 Output: [1,3,12,0,0]

 */

 function moveZeroes(nums){

  let x = 0;

  for(let i=0;i<nums.length;i++){

      if(nums[i]!==0){
          nums[x] = nums[i];
          x++;
      }
  }

  for(i=x;i<nums.length;i++){
      nums[i] = 0;
  }

  return nums;

}

let nums = [0,1,0,3,12];

let result = moveZeroes(nums);
console.log(result);


/* 485. Max Consecutive Ones 

Input: nums = [1,1,0,1,1,1]
Output: 3 */

function findMaxConsecutiveOnes(nums){
    
  let currentSum = 0;
  let MaxSum = 0;

  for(let i=0;i<nums.length;i++){
     
      if(nums[i]==1){
         currentSum++;
      } else {
          MaxSum = Math.max(currentSum,MaxSum);
          currentSum=0;
      }
      
  }

  return Math.max(MaxSum,currentSum);
}

let  nums = [1,1,0,1,1,1];
let result = findMaxConsecutiveOnes(nums);
console.log(result);


/* 136. Single Number  

Input: nums = [4,1,2,1,2]

Output: 4

*/

//method 1

function singleNumber(nums){
  let hash = {};

  for(let i=0;i<nums.length;i++){
      if(!hash[nums[i]]){
          hash[nums[i]]=1;
      } else {
          hash[nums[i]]++;
      }
  }

  for(let i=0;i<nums.length;i++){
      if(hash[nums[i]]==1){
          return nums[i];
      }
  }
}

let  nums = [4,1,2,1,2];
let result = singleNumber(nums);
console.log(result);

//method 2


function singleNumber(nums){
  let xor = 0;

  for(let i=0;i<nums.length;i++){
      xor = xor ^ nums[i];
  }

  return xor;
}

let  nums = [4,1,2,1,2];
let result = singleNumber(nums);
console.log(result);

