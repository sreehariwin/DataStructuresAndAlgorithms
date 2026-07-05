/*Pattern Printing

NO 1:

1
12
123
1234
12345

*/

let n = 5
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

let n = 5
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

/*Pattern Printing

NO 3:

1
01
010
1010
10101

*/

let n = 5;

for(let i=0;i<n;i++){
    let rows = "";
    let toggle = 1;

    for (let j=0;j<i+1;j++){
        rows = rows+toggle;
        if(toggle==1){
            toggle = 0;
        } else {
            toggle = 1;
        }
    }
    console.log(rows);
    
}




/*Pattern Printing

NO 4:

1
10
101
1010
10101

*/

let n = 5;
let toggle = 1;

for(let i=0;i<n;i++){
    let rows = "";
    for (let j=0;j<i+1;j++){
        rows = rows+toggle;
        if(toggle==1){
            toggle = 0;
        } else {
            toggle = 1;
        }
    }
    console.log(rows);
    
}


/*Pattern Printing

No 5:

1
22
333
4444

*/

let n=5;

for(let i=0;i<n;i++){
    let rows = "";
    for(let j=0;j<i+1;j++){
        rows = rows+i;
    }
    console.log(rows);
}


/*Pattern Printing

No 6:

1234
123
12
1

*/

let n = 4;

for(let i=0;i<n;i++){
    let rows = "";
    for(let j=0;j<n-i;j++){
      rows = rows+(j+1);
    }
    console.log(rows);
    
}
