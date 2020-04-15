/节点
class Node {
    constructor(ele) {
        this.data = ele
        this.next = null
    }
}
//链表
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }


    //遍历链表
    iterator() {
        let currentNode = this.head
        if (currentNode) {
            console.log(currentNode.data)
            while (currentNode.next) {
                console.log(currentNode.next.data)
                currentNode = currentNode.next
            }
        }
    }

    //在链表末尾添加节点
    append(node) {
        let currentNode = this.head
        if (!currentNode) {
            this.head = node
        } else {
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
        this.length++;
    }

    //在指定位置添加节点
    appendAt(position, node) {
        let currentNode = this.head
        let index = 0;
        if (position >= 0 && position <= this.length) {
            if (position === 0) {
                node.next = currentNode
                this.head = node

            } else if (position === this.length) {
                console.log('true')
                while (currentNode.next) {
                    currentNode = currentNode.next
                }
                currentNode.next = node
            } else {
                while (index++ < position - 1) {
                    currentNode = currentNode.next
                }
                node.next = currentNode.next
                currentNode.next = node
            }
        }
        this.length++
    }

    //删除默认节点
    removed() {
        let currentNode = this.head;
        let index = 1
        if (currentNode && currentNode.next == null) {
            this.head = null
        } else
        if (currentNode && currentNode.next) {
            while (index++ < this.length - 1) {
                currentNode = currentNode.next
            }
            currentNode.next = null;
        }
        this.length--;
    }

    //删除指定位置的节点
    removedAt(position) {
        let currentNode = this.head
        if (position >= 0 && position < this.length) {
            let index = 0
            if (position === 0) {
                this.head = currentNode.next
            } else if (position === this.length - 1) {
                while (index++ < this.length - 2) {
                    currentNode = currentNode.next
                }
                currentNode.next = null
            } else {
                while (index++ < position - 1) {
                    currentNode = currentNode.next
                }
                currentNode.next = currentNode.next.next
            }
        }
        this.length--
    }


}

let link = new LinkedList()
link.append(new Node(1))
link.append(new Node(2))
link.append(new Node(3))
link.append(new Node(4))
link.append(new Node(5))
link.append(new Node(6))
link.iterator();

console.log('------')
link.appendAt(6, new Node(8))
link.appendAt(7, new Node(8))
link.iterator()