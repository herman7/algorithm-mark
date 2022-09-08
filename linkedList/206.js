// 反转链表

// 定义一个单链表
function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

var reverseList = function (head) {
  if (!head || !head.next) return head;
  let prev = null, curr = head;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev
};