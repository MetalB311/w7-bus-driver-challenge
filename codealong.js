class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null){
    this.head = head
    }

Size(){
    let node = this.node
    let count = 0
    while(node){
        count ++
        node = node.next
        }

        return count
    }

    getLast(){
        let lastNode = this.head
        while(lastNode.next){
            lastNode = lastNode.next
        }
        return lastNode
    }

    inEmpty(){
        return this.Size() = 0
    }

}

let nodeA = new Node('A')
let nodeB = new Node('B')

nodeA.next = nodeB

let list = new LinkedList(nodeA)

console.log(list.head.next.data)
// this will bring the value of B

let nodeC = new Node('C')

nodeB.next = nodeC
