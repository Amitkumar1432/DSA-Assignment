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
    
    }
    let s1 = new stack()
    s1.pushten(5)
    s1.push(25)
    console.log(s1)
    s1.pop()