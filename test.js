function SecondLargest(arr){
   largest = -Infinity;
   Second  = -Infinity;

   for(let i=0;i<arr.length;i++){
       if(arr[i]>largest){
         Second = largest;
         largest = arr[i];
       } else if (arr[i] > Second) {
         Second = arr[i];
       }
   }
   return Second;
}


let arr = [10,-6,2,0,-8,22];
let Output = SecondLargest(arr);
console.log(Output);
