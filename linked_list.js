class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    addFirst(data) {      //add new node at first index
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data) {       //add new node at last index
        const newNode = new Node(data);

        if(!this.head) {
           this.head = newNode;
           return;
        }
        
        let current = this.head;
        while(current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    size() {
        let count = 0;
        let current = this.head;
        while(current) {
            count++;
            current = current.next;
        } 
        return count;       
    }

    addAt(index,data) {
        if(index < 0 || index > this.size()) {
            console.error("invalid Index");
            return;
        }

        const newNode = new Node(data);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
          for(let i=0; i<index-1; i++) {
             current = current.next
          }
          newNode.next=current.next
          current.next = newNode;
    }

    print() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const linkedlist = new LinkedList();

linkedlist.addFirst(10);
// linkedlist.addFirst(20);
linkedlist.addLast(15);
linkedlist.addAt(1,22);

linkedlist.print();