function(triangle) {
  const m = triangle.length - 1;
  let dp = [];
  dp[m] = triangle[m]
  for (let i = 0; i < m; i++) {
    dp[i] = [];
  }
  console.log(JSON.parse(JSON.stringify(dp)));
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      console.log(i, j);
      dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j]
      console.log(JSON.parse(JSON.stringify(dp)));
    }
  }
  return dp[0][0];
};