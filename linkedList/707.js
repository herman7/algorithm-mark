class LinkNode {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

var MyLinkedList = function() {
  this._size = 0;
  this._head = null;
  this._tail = null;
}

MyLinkedList.prototype.getNode = function(index) {
  if (index < 0 || index >= this._size) return null
  let curr = this._head
  for (let i = 0; i < index; i++) {
    curr = curr.next
  }
  return curr
}

MyLinkedList.prototype.addAtHead = function(value) {
  const node = new LinkNode(value, this._head)
  this._head = node
  this._size++
  if (!this._tail) {
    this._tail = node
  }
}

MyLinkedList.prototype.addAtTail = function(value) {
  const node = new LinkNode(value, null)
  if (this._tail) {
    this._tail.next = node
    this._tail = node
  } else {
    this._head = this._tail = node
  }
  this._size++
}

MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this._size) return -1
  return this.getNode(index).value
}

MyLinkedList.prototype.addAtIndex = function(index, value) {
  if (index === this._size) {
    this.addAtTail(value)
    return
  }
  if (index > this._size) return
  if (index <= 0) {
    this.addAtHead(value)
    return
  }
  const prevNode = this.getNode(index - 1)
  node.next = new LinkNode(value, node.next)
  this._size++
}

MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this._size) return
  if (index === 0) {
    if (this._head === this._tail) {
      this._head = this._tail = null
    } else {
      this._head = this._head.next
    }
    this.size--
    return
  }
  const node = this.getNode(index - 1)
  node.next = node.next.next
  if (index === this._size - 1) {
    this._tail = node
  }
  this._size--
}