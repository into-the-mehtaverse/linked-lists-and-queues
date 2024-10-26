// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        this.length++

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        return this.length;
    }

    sumOfNodes() {

        let sum = 0;
        let current = this.head;

        while (current) {
            sum += current.value;
            current = current.next
        }

        return sum;
    }

    averageValue() {
        return this.sumOfNodes() / this.length
    }

    findNthNode(n) {
        let count = 0;
        let current = this.head;

        while (count !== n) {
            count++;
            current = current.next;
         }

         return current;
    }

    findMid() {

        if (this.length === 0) return null;

        let midpoint = Math.floor((this.length - 1) / 2);

        return this.findNthNode(midpoint);
    }

    reverse() {

        let current = this.head;
        let newList = new SinglyLinkedList ();
        while (current) {
            let newNode = new SinglyLinkedNode (current.value);

            newNode.next = newList.head;
            newList.head = newNode;
            current = current.next;
        }

        return newList;
    }

    reverseInPlace() {

        let prev = null;
        let current = this.head;

        while (current) {
            let nextNode = current.next;  // Store the next node
            current.next = prev;          // Reverse the current node's pointer
            prev = current;               // Move prev to the current node
            current = nextNode;           // Move to the next node
        }

        this.head = prev;  // Update the head to be the new front of the list
    }
}

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

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        this.length++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        if (!this.head) return null;

        let midpoint = Math.floor((this.length - 1) / 2);
        let current;

        // Choose direction based on the midpoint
        if (midpoint < (this.length - 1) / 2) {
            // Traverse from the head
            current = this.head;
            for (let i = 0; i < midpoint; i++) {
                current = current.next;
            }
        } else {
            // Traverse from the tail
            current = this.tail;
            for (let i = this.length - 1; i > midpoint; i--) {
                current = current.prev;
            }
        }

        return current;
    }

    reverse() {
        let newList = new DoublyLinkedList();
        let current = this.head;

        // Traverse the original list
        while (current) {
            // Create a new node for the new list
            let newNode = new DoublyLinkedNode(current.value);

            // Add to the head of the new list to reverse the order
            if (!newList.head) {
                newList.head = newNode;
                newList.tail = newNode;
            } else {
                newNode.next = newList.head;
                newList.head.prev = newNode;
                newList.head = newNode;
            }

            // Move to the next node in the original list
            current = current.next;
        }

        // Set the length of the new list to match the original list
        newList.length = this.length;

        return newList;

    }

    reverseInPlace() {
        if (this.length <= 1) return this; // No need to reverse if the list has 0 or 1 element

        let current = this.head;
        let temp = null;

        // Swap `next` and `prev` pointers for all nodes
        while (current) {
            // Swap `next` and `prev`
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;

            // Move to the next node in the original order
            current = current.prev; // `current.prev` is now the next node in the original list
        }

        // Swap the head and tail
        this.head = this.tail;
        this.tail = temp.prev;

        return this;
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
