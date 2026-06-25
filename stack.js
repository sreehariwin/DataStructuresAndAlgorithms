class Stack{

    constructor(){
        this.stack = [];
    }

    push(element){
      if(Array.isArray(element)){
        element.forEach(item => this.stack.push(item));
      } else {
        this.stack.push(element);
      }
    }

    pop(){
      if(this.isEmpty()){
        return "stack is empty";
      }
      return this.stack.pop()
    }

    peek(){
     if(this.isEmpty()){
        return "stack is empty";
     }
     return this.stack[this.size()-1];
    }

    isEmpty(){
        return this.size() === 0; 
    }
    
    size(){
        return this.stack.length
    }
}

const stack = new Stack();

stack.push([3,12,7,11,5]);
// stack.push(9);
// stack.push(12);
// stack.push(19);
console.log(stack.peek());


