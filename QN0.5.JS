class NodeList {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }
    push(val) {
        let node = new NodeList(val)
        if (!this.top) {
            this.top = node
            this.bottom = node
        } else {
            this.top.next = node
            this.top = node
        }
        this.length++
        return node
    }
    //using for loop pushing 1 to 10
    pushten() {
        for (let i = 1; i <= 10; i++) {
            s1.push(i);
        }
    }
    pop() {
        if (!this.top) return undefined
        let current = this.bottom
        let prev = current
        while (current.next) {
            prev = current
            current = current.next
        }
        if (this.top === this.bottom) {
            this.top = null
            this.bottom = null
        } else {
            prev.next = null
            this.top = prev
        }
        this.length--
        return current
    }
    popten() {
        if (!this.top || this.length<10) {
            console.log("call pushen() first or push (>=10) elements")
            return;

        }
        for (let i = 1; i <= 10; i++) {
            console.log(s1.pop().val);
        }
    }

}
let s1 = new stack()
//s1.pushten()
console.log(s1)
s1.popten()