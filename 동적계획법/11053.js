// 가장 긴 증가하는 부분 수열
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...inputs] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

N = Number(N);
inputs = inputs[0].split(" ").map(Number);

const dp = new Array(N);
dp[0] = 1;

function dynamic() {
  for (let i = 1; i < N; i++) {
    dp[i] = 1;
    let max = 1;
    for (let j = 0; j <= i; j++) {
      if (inputs[i] > inputs[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

dynamic();

console.log(Math.max(...dp));
