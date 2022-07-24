class NodeList {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    append(val) {
        let node = new NodeList(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return node
    }
    //for iterating
    getItem() {
        let res = [];
        if (!this.head) return res;
        let count = 0, current = this.head;
        while (current) {
            res.push(current.val);
            current = current.next;
        }
        return res
    }
}
let l1 = new SinglyLinkedList();
l1.append(5);
l1.append(9);
l1.append(19);
console.log(l1)
console.log(l1.getItem())

