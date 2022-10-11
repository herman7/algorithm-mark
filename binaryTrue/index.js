
// 二叉查找树代码实现
function BinarySearchTree () {
  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  var root = null;

  // 插入节点
  this.insert = function(key) {
    var newNode = new Node(key)
    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }
  // 删除节点
  this.remove = function(key) {
    removeNode(key)
  }
  // 查找节点
  this.search = function(key) {
    return searchNode(root, key)
  }
  // 查找最小节点
  this.findMin = function() {
    return minNode(root)
  }
  // 查找最大节点
  this.findMax = function() {
    return maxNode(root)
  }
  // 中序遍历
  this.inOrderTraverse = function() {
    inOrderTraverseNode(root)
  }
  // 前序遍历
  this.preOrderTraverse = function() {
    preOrderTraverseNode(root)
  }
  // 后序遍历
  this.postOrderTraverse = function() {
    postOrderTraverseNode(root)
  }
  function insertNode(root, node) {
    if (node.key < root.key) {
      if (root.left === null) {
        root.left = node
      } else {
        insertNode(root.left, node)
      }
    } else {
      if (root.right === null) {
        root.right = node
      } else {
        insertNode(root.right, node)
      }
    }
  }
  function inOrderTraverseNode(node) {
    if (node === null) return
    inOrderTraverseNode(node.left)
    console.log(node.key)
    inOrderTraverseNode(node.right)
  }
  function preOrderTraverseNode(node) {
    if (node === null) return
    console.log(node.key)
    preOrderTraverseNode(node.left)
    preOrderTraverseNode(node.right)
  }
  function postOrderTraverseNode(node) {
    if (node === null) return
    postOrderTraverseNode(node.left)
    postOrderTraverseNode(node.right)
    console.log(node.key)
  }
  function minNode(node) {
    if (!node) return null
    while (node.left !== null) {
      node = node.left
    }
    return node.key
  }
  function maxNode(node) {
    if (!node) return null
    while (node.right !== null) {
      node = node.right
    }
    return node.key
  }
  function searchNode(node, key) {
    if (node === null) return false
    if (node.key === key) return true
    if (node.key < key) return searchNode(node.right, key)
    if (node.key > key) return searchNode(node.left, key)
  }
  function removeNode(key) {
    var p = root;
    var pp = null;
    while (p !== null && p.key !== key) {
      pp = p
      if (p.key > key) {
        p = p.left
      } else {
        p = p.right
      }
    }
    // 没有找到key
    if (p === null) return

    if (p.left !== null && p.right !== null) {
      var minRight = p.right
      var minRightParent = p
      while (minRight.left) {
        minRightParent = minRight
        minRight = minRight.left
      }
      p.key = minRight.key
      // 删除minRight节点，minRight只可能有right，没有left
      // 注意这里，minRightParent和minRight的关系是，minRightParent既可能是它的left指向minRight，也可能是right
      if (minRightParent.left === minRight) {
        minRightParent.left = minRight.right
      } else {
        minRightParent.right = minRight.right
      }
      // minRightParent.left = minRight.right
      // if (minRight.right) {
      //   minRightParent.left = minRight.right
      // } else {
      //   minRightParent.left = null
      // }
      return
    }

    var child = null
    if (p.left !== null) {
      child = p.left
    } else {
      child = p.right
    }
    // 删除的是根节点
    if (pp === null) {
      root = child
    } else if (pp.left === p) {
      pp.left = child
    } else {
      pp.right = child
    }
  }
}


// 测试
const tree = new BinarySearchTree()

// const arr = [9, 6, 3, 8, 7, 7.5, 12, 15]
const arr = [5,3,6,2,4,7]
arr.forEach(it => tree.insert(it))

console.info('中序遍历')
tree.inOrderTraverse()
console.info('前序遍历')
tree.preOrderTraverse()
console.info('后序遍历')
tree.postOrderTraverse()

// console.info('最小值')
// console.info(tree.findMin())
// console.info('最大值')
// console.info(tree.findMax())

// console.log('查找值')
// console.log(tree.search(100))

tree.remove(3)

console.info('中序遍历')
tree.inOrderTraverse()
console.info('前序遍历')
tree.preOrderTraverse()
console.info('后序遍历')
tree.postOrderTraverse()

