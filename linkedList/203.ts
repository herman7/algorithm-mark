class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// 不使用虚拟头节点ret哨兵
function removeElements(head: ListNode | null, val: number): ListNode | null {
  while (head !== null && head.val === val) {
    head = head.next
  }
  if (head === null) return head
  let pre: ListNode = head, curr: ListNode | null = head.next
  while (curr) {
    if (curr.val === val) {
      pre.next = curr.next
    } else {
      pre = pre.next as ListNode
    }
    curr = curr.next
  }
  return head
}

// 使用虚拟头节点ret哨兵
function removeElements2(head: ListNode | null, val: number): ListNode | null {
  const ret = new ListNode(0, head)
  let pre = ret, curr = ret.next
  while (curr) {
    if (curr.val === val) {
      pre.next = curr.next
    } else {
      pre = curr
    }
    curr = curr.next
  }
  return ret.next
}

export {}