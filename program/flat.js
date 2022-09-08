// 数组扁平化 [1, [2, [3, 4]]] => [1, 2, 3, 4]

// 递归求解
const flatten = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// 递归求解 reduce
const flatten = function (arr) {
  return arr.reduce((p, c) => p.concat(Array.isArray(c) ? flatten(c) : c), [])
}

// toString 具有局限性，比如arr内类型混装 [1, '1', [2, '2']]就无效
const flatten = function (arr) {
  let result = [];
  return arr.toString().split(',').map(it => +it);
}

// flat的参数默认为1，表示仅展开一层后的结果，可使用正无穷Infinity，Infinity > Number.MAX_SAFE_INTEGER。
const flatten = function (arr) {
  return arr.flat(Infinity);
}

