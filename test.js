function SecondLargest(arr){

  if(arr.length<2){
    return "Array should atleast have 2 elements";
  }

   largest = -Infinity;
   Second  = -Infinity;

   for(let i=0;i<arr.length;i++){
       if(arr[i]>largest){
         Second = largest;
         largest = arr[i];
       } else if (arr[i] > Second && arr[i] != largest) {
         Second = arr[i];
       }
   }
   return Second;
}


let arr = [10,-6,2,0,-8,10];
let Output = SecondLargest(arr);
console.log(Output);
