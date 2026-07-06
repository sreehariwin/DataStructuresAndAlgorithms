// function secondLargest(arr){
//     let largest = Number.NEGATIVE_INFINITY;
//     let Second  = Number.NEGATIVE_INFINITY;
    
//     for(let i=0; i<=arr.length-1; i++){
//           if(arr[i]>largest){
//             Second = largest;
//             largest =  arr[i];
//           } else if(arr[i] != largest && arr[i]> Second){
//              Second = arr[i];
//           }
//     }

//     return Second;

// }

// function secondLargest(arr){
//     var Values = Array.from(new Set(arr));
    
//     Values.sort((a ,b)=>{
//         return b - a;
//     });

//     if(Values.length >=2 ){
//        return Values[1];
//     }else{
//         return -1;
//     }
    
// }


// console.log(secondLargest([4,9,19,18,3]));

// function rotatedArray(nums,k){
//      let size = nums.length;

//      if(size > k){
//        k = k % size;
//      }

//      const rotated = nums.splice(size - k, size);

//      nums.unshift(...rotated);

//      return nums;
// }

// console.log(rotatedArray([3,5,6,2,7,8],3));

//leetcode 283

// function moveZeroes(nums){
    
//     if(nums.length === 1){
//        return nums;
//     }
//     let nonZero = [];
//     let Zero = [];
//     for(let i = 0; i<nums.length; i++){
//      if(nums[i] != 0){
//         nonZero.push(nums[i]);
       
//      }
//      if(nums[i] == 0){
//         Zero.push(nums[i]);
       
//      }
//     }

//     let Output = [...nonZero,...Zero];
//     return Output;
// }


// console.log(moveZeroes([0,1,0,3,12])); 

// function moveZeroes(nums){
    
//     if(nums.lenght === 1){
//        return nums;
//     }
//     let Zeros =  nums.filter(num => num==0).length;
//     let Values=  nums.filter(num => num!=0);
//     let result = [...Values, ...Array(Zeros).fill(0)];

//     return result;
// }


// console.log(moveZeroes([0,1,0,3,12])); 

//leetcode 2016(not completed)

// function maximumDifference(nums) {
//     var arr = [];
//     for(let i = 0; i<=nums.length-1;i++){
//        for(let j = i+1;j<=nums.length;j++){
//          if(nums[j]>nums[i]){
//            arr.push(nums[j]-nums[i])
//          }
//        }
      
//     }
//     var order = arr.filter((a,b)=>b-a);
//     console.log(order.shift(-1));
// };

// console.log(maximumDifference([7,1,5,4]));

// leetcode 53

// function maxSubArray(nums){
//   var maxSum = nums[0];

//   for(var i=0;i<nums.length;i++){        
//     var currentSum = 0;
//     for(var j=i;j<nums.length;j++){      
//       currentSum = currentSum+nums[j];  
//        if(currentSum > maxSum){
//         maxSum = currentSum;
//        }
//     }
//   }
//   return maxSum;

// }

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

//kadane's algorithm

// function maxSubArray(nums){
//     let sum = 0;
//     let max  = nums[0];
   

//     for (let i = 0; i < nums.length; i++) {
//         sum+= nums[i];
//         if(sum > max){
//             max = sum;
//         }
//         if (sum < 0) {
//             sum = 0;
//         }
        
//     }
//     return max;
// }

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));



// function f(n){

//     if(n<=1){
//         return 1; 
//     }

//     return n * f(n - 1);
// }

// console.log(f(5));



// var scriptJs = require('./script')

// scriptJs.hello()

//recursion  

// function rangeofNumbers(startNum,endNum){
//     if(endNum<startNum){
//         return [];
//     } else {
//         const nums =  rangeofNumbers(startNum,endNum-1);
//         nums.push(endNum);
//         return nums;
//     }
// }

// console.log(rangeofNumbers(0,5));

// recursion

// var fib = function (n) {
//     let arr = [0,1];
//     for(let i=2;i<=n;i++){
//         arr.push(arr[i-2] + arr[i - 1]);
//     }
//     return arr[n];
// };
// console.log(fib(5)); 

// const maxSlidingWindowNative = function (nums,k) {
//     const result = [];

//     const n = nums.length;

//     for  (i=0; i <=n-k; i++) {
//         let max = nums[i];
//         for (j=1; j<k; j++) {
//             if (nums[i+j] > max){
//               max = nums[j+i];
//             }
//         }

//         result.push(max);
//     }
//     return result;
// }

// console.log(maxSlidingWindowNative([1,3,-1,-3,5,3,6,7],3));



//

// const linearSearch = (nums,target) => {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             return i;
//         } 
//     }
//     return -1;
// }

// console.log(linearSearch([4,5,11,26,18,9],11));


// const globallinearSearch = (nums,target) => {
//     const result = [];
//     for (let i = 0; i < nums.length; i++) {
//             if (target === nums[i]) {
//                 result.push(i);
//             } 
//     }
//     if (result.length === 0 ) return -1;
//         return result;
    
// };

// console.log(globallinearSearch([4,5,11,26,11,9],11));

// function binarySearch(nums,target){
//     let start = 0;
//     let end   = nums.length-1;

//     while ( start<=end ) {
//         middle = Math.floor((start + end )/2);

//         if (nums[middle] === target){
//             return middle;
//         } else if (nums[middle] < target ) {
//             start = middle+1;
//         } else {
//             end = middle-1;
//         }
//     }
//     return -1;
// }

// console.log(binarySearch([-1,0,3,5,9,12],9));


// function quickSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
  
//     const pivot = arr[0];
//     const left = [];
//     const right = [];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
  
//     return [...quickSort(left), pivot, ...quickSort(right)];
//   }
  
//   console.log(quickSort([5, 2, 9, 3, 6, 1, 8, 7]));

// function reverseStr(str){

//     if(str == ''){
//         return '';
//     } else {
//         return reverseStr(str.substring(1)) + str.charAt(0);
//     }   
// }

// console.log(reverseStr('golang'));


// function SecondLargest(arr){

//     if(arr.length<2){
//       return "Array should atleast have 2 elements";
//     }
  
//      largest = -Infinity;
//      Second  = -Infinity;
  
//      for(let i=0;i<arr.length;i++){
//          if(arr[i]>largest){
//            Second = largest;
//            largest = arr[i];
//          } else if (arr[i] > Second && arr[i] != largest) {
//            Second = arr[i];
//          }
//      }
//      return Second;
//   }
  
  
//   let arr = [10,-6,2,0,-8,10];
//   let Output = SecondLargest(arr);
//   console.log(Output);


  
// function countDigits(n){

//     if(n==0) return 1;    
//     n=Math.abs(n);
   
//     let count = 0
//     while(n>0){
//         n=Math.floor(n/10);
//         count++;
//     }

//     return count;

// }

// let n= -259;

// let result = countDigits(n);

// console.log(result);

