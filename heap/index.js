// 构建一个堆，使用传入的比较函数来处理比较问题
class Heap {
	constructor(compareFn) { // 第一个参数代表父节点，第二个参数代表子节点 return a - b 则代表小顶堆，反之大顶堆
    this.compareFn = compareFn
    this.queue = []
  }
  size() {
    return this.queue.length
  }
  _compare(index1, index2) {
    // 处理下标越界问题
    if (this.queue[index1] === undefined) return 1;
    if (this.queue[index2] === undefined) return -1;

    return this.compareFn(this.queue[index1], this.queue[index2]);
  }
  push(item) {
    this.queue.push(item)

    // 下面进行向上堆化操作(上浮)
    let currIndex = this.size() -1 // 当前节点下标
    let parentIndex = Math.floor(index - 1) / 2 // 父节点下标
    while (parent >=0 && this._compare(parent, index) > 0) {
      [this.queue[currIndex], this.queue[parentIndex]] = [this.queue[parentIndex], this.queue[currIndex]]
      currIndex = parent
      parent = Math.floor((index - 1) / 2)
    }
  }
  pop() {
    const out = this.queue[0]
    // 将最后一个元素 填入第一个元素
    this.queue[0] = this.queue.pop()

    // 向下堆化(下浮)
    let currIndex = 0
    let leftChildIndex = 1
    let nextChildIndex = this._compare(left, left + 1) > 0 ? left + 1 : left
    while (nextChildIndex !== undefined && this._compare(index, nextChildIndex) > 0) {
      [this.queue[index], this.queue[nextChildIndex]] = [this.queue[nextChildIndex], this.queue[index]]
      index = nextChildIndex
      leftChildIndex = 2 * index + 1
      nextChildIndex = this._compare(left, left + 1) > 0 ? left + 1 : left
    }
    return out
  }
}

// 创建小顶堆
const heap= new Heap((a, b) => a - b)

// 创建大顶堆
const heap= new Heap((a, b) => a - b)

// 若每个节点是一个数组[i, j]，我们若根据j的大小来创建小顶堆
const heap= new Heap((a, b) => a[1] - b[1])