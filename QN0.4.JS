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
    delete(ind) {
        if (ind < 0 || ind > this.length) return undefined
        if (ind === 0) return this.shift(ind)
        if (ind === this.length - 1) return this.pop(ind)
        let count = 0, current = this.head
        while (count !== ind - 1) {
            current = current.next
            count++
        }
        let temp = current.next
        current.next = temp.next
        temp.next = null
        this.length--
        return temp
    }
}
let l1 = new SinglyLinkedList()
l1.append(4);
l1.append(8);
l1.append(9);
l1.append(19);
l1.append(49);
console.log(l1);
console.log(l1.delete(2))