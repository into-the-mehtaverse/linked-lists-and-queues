// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        let newNode = new SinglyLinkedNode (val);
        if (this.head === null) {
        this.head = newNode;
        this.length++
        return this;
      }

      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;

    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (this.head === null) {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return this;
        }
        let current = this.head;
        while (current) {
            if (current.next === null) {
                newNode.next = current.next;
                current.next = newNode;
                this.length++;
                return this;
            }
            current = current.next;
        }
    }

    removeFromHead() {

    if (this.head) {
        let removed = this.head
        this.head = this.head.next;
        this.length--;
        return removed;
        }
    }

    removeFromTail() {

    if (this.head) {
        let current = this.head;
        while (current.next) {
            if (!current.next.next) {
                let removed = current.next;
                current.next = current.next.next;
                this.length--;
                return removed;
            }
            current = current.next;
        }
        let removed = current;
        this.head = current.next;
        this.length--;
        return removed;
    }
    }

    peekAtHead() {
        if (this.head) return this.head.value;
    }

    print() {
        if (this.head) {
            let current = this.head;
            while (current) {
                console.log(current.value)
                current = current.next;
            }
            console.log(current);
            return;
        }
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
