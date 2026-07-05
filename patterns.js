/*Pattern Printing

NO 1:

1
12
123
1234
12345

*/

n = 5
for(let i=0;i<n;i++){
    let row = " ";   
    for(let j=0;j<=i;j++){
        row = row+(j+1);
    }
    console.log(row);
    
}

/*Pattern Printing

NO 2:

     *
    **
   ***
  ****
 *****

*/

n = 5
for(let i=0;i<n;i++){
    let row = " ";   
    for(let j=0;j<n-(i+1);j++){
        row = row+(" ");
    }
    for(let k=0;k<i+1;k++){
        row = row+("*");
    }
    console.log(row);
    
}