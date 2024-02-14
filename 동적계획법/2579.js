// 계단 오르기
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...inputs] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

N = Number(N);
inputs = inputs.map(Number);

// console.log(N);
// console.log(inputs);

const dp = Array.from({ length: N }, () => 0);
dp[0] = inputs[0];
dp[1] = Math.max(inputs[0] + inputs[1], inputs[1]);
dp[2] = Math.max(inputs[0] + inputs[2], inputs[1] + inputs[2]);

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(
    dp[i - 3] + inputs[i - 1] + inputs[i],
    dp[i - 2] + inputs[i]
  );
}

console.log(dp[N - 1]);

// dp[i] =>
// 1. i번째 계단과 i-1번째 계단이 연속될 경우
// 2. 연속되지 않게 i번째 계단에 도착할 경우

// 1. dp[i] = dp[i-3] + point[i-1] + point[i]
// 2. dp[i] = dp[i-2] + point[i]
