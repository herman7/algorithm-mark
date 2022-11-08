// https://time.geekbang.org/column/article/75702

// 状态转移表法
// i为纵向下标，j为横向下标
const miniDistBT = (matrix: number[][], n: number) => {
  let states;
  let sum = 0;
  for (let j = 0; j < n; ++j) { // 初始化states的第一行数据
    sum += matrix[0][j];
    states[0][j] = sum;
  }
  sum = 0
  for (let i = 0; i < n; ++i) {
    sum += matrix[i][0]
    states[i][0] = sum;
  }
  for (let i = 1; i < n; ++i) {
    for (let j = 1; j < n; ++j) {
      states[i][j] = matrix[i][j] + Math.min(states[i][j-1], states[i-1][j])
    }
  }
  return states[n-1][n-1]
};

// 状态转移方程法
// min_dist(i, j) = w[i][j] + min(min_dist(i, j-1), min_dist(i-1, j))
// 递归+备忘录
const matrix = [[1, 3, 5, 9], [2, 1, 3, 4], [5, 2, 6, 7], [6, 8, 4, 3]]
const memory: number[][] = []
const miniDistBT2 = (i, j) => {
  if (i === 0 && j === 0) return matrix[0][0]
  if (memory[i][j] > 0) return memory[i][j]
  let minLeft = Number.MAX_VALUE
  if (j-1 >= 0) {
    minLeft = miniDistBT2(i, j-1)
  }
  let minUp = Number.MAX_VALUE
  if (i-1 >= 0) {
    minUp = miniDistBT2(i-1, j)
  }
  let currentMinDist = matrix[i][j] + Math.min(minLeft, minUp)
  memory[i][j] = currentMinDist
  return currentMinDist
}