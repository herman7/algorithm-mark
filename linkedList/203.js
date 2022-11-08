const ListNode = function (val, next) {
  this.value = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// 使用ret哨兵
const removeElements = function(head, val) {
  const ret = new ListNode(0, head)
  let curr = ret
  while (curr.next) {
    if (curr.next.value === val) {
      curr.next = curr.next.next
      continue
    }
    curr = curr.next
  }
  return ret.next
}