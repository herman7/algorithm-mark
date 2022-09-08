// 两两交换链表中的节点

// 定义一个单链表
function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

var swapPairs = function(head) {
  if (!head || !head.next) return head;
  let ret = new ListNode(0, head), temp = ret;
  while (temp.next && temp.next.next) {
    let curr = temp.next.next, prev = temp.next;
    prev.next = curr.next;
    curr.next = prev;
    temp.next = curr;
    temp = prev;
  }
  return ret.next
};