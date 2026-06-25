class sample {

    hai(){
        console.log('testttt');
    }
}

class Test extends sample{
    constructor(data1,data2){
        super();  // to inherit the class constructor;
        this.data1 = data1;
        this.data2 = data2;
    }

    sum(){
        console.log(this.data1 + this.data2);
    }
}

var obj = new Test(10,20);

obj.sum();
obj.hai();