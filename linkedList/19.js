// 删除链表的倒数第N个节点

// 定义一个单链表
function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

var removeNthFromEnd = function(head, n) {
  
};

function test() {

  for (let key in arguments) {
    console.log('key: ' + key + ' value: ' + arguments[key]);
  }
}


function testError () {
  try {
    throw new SyntaxError();
  } catch (e) {
    console.log(e);
    console.log('-------------------');
    console.log(e.message);
    console.log('-------------------');
    console.log(e.name);
    console.log('-------------------');
    console.log(e.stack);
  }
}

testError();