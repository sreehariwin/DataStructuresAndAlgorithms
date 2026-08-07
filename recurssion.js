/* Sum of odd numbers */

let arr = [5,3,2,7,10,1];


function sum(n){
   let isOdd = ((arr[n] % 2)!=0);

   if(n==0){
    return isOdd ? arr[n]:0;
   }

   return ((isOdd?arr[n]:0)+sum(n-1));
}



let result = sum(arr.length-1);

console.log(result);


/* if power of 2 */


function isPowerOfTwo(n){
    if(n==1) return true; 
 
     if(n<1||n % 2 !== 0) return false;
 
     return isPowerOfTwo(n/2);
 }
 
 
 
 let result = isPowerOfTwo(16);
 
 console.log(result);
 

 /* 509. Fibonacci Number 

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

*/


var fib = function(n) {
    if(n<=1){
        return n;
    }
    return fib(n-1)+fib(n-2);
};

console.log(fib(7));
