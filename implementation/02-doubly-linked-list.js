// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode (val);

        if (!this.tail) {
            this.tail = newNode;
            this.head = newNode;
            this.length++;
            return;
        } else {
            newNode.next = this.tail.next;
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++
            return;
        }
    }

    removeFromHead() {
        if (this.head && this.length > 1) {
            this.head.next.prev = null;
            let removed = this.head;
            this.head = this.head.next;
            this.length--;
            return removed.value;
        }

        if (this.head) {
            let removed = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return removed.value;
        }
    }

    removeFromTail() {

    let removed = this.tail;
        if (this.tail && this.length > 1) {
            this.tail.prev.next = this.tail.next;
            this.tail = this.tail.prev;
            this.length--;
            return removed.value;
        }

        if (this.tail) {
            this.tail = null;
            this.head = null;
            this.length--;
            return removed.value;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        if (this.head) return this.head.value;
    }

    peekAtTail() {
        if (this.tail) return this.tail.value;
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
