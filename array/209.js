// 暴力解法
var solution = function (target, nums) {
  let result = Number.MAX_SAFE_INTEGER, sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      let subLength = j - i + 1;
      if (sum >= target && subLength < result) {
        result = subLength;
        break;
      }
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}

// 滑动窗口
var solution = function (target, nums) {
  let result = Number.MAX_SAFE_INTEGER, sum = 0, i = 0;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    while (sum >= target) {
      result = j - i + 1 < result ? result : j - i + 1;
      sum -= nums[i++];
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}