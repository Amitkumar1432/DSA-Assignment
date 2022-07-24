
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
    findlength(){
        return this.length
    }
}
let l1 = new SinglyLinkedList()
l1.append(4);
l1.append(8);
l1.append(9);
l1.append(19);
l1.append(49);
console.log("length is "+l1.findlength())



