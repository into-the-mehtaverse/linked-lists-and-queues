const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        let newNode = new SinglyLinkedNode (val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this.length;
        }

        if (this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
            return this.length;
        }

    }

    dequeue() {

        if (!this.head) return null;

        let dequeued = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return dequeued.value;
        } else {
            this.head = this.head.next;
            this.length--;
            return dequeued.value;
        }

    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
