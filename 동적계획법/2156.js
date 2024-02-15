// 포도주 시식
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...inputs] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

N = Number(N);
inputs = inputs.map(Number);

const dp = Array.from({ length: N }, () => 0);
dp[0] = inputs[0];
dp[1] = inputs[0] + inputs[1];
dp[2] = Math.max(inputs[0] + inputs[2], inputs[1] + inputs[2], dp[1]);

function dynamic(n) {
  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(
      dp[i - 3] + inputs[i - 1] + inputs[i], // n번쨰 포도주를 마시고, n-1 번쨰 포도주를 마실경우 n-2를 건너뛰고 n-3의 최댓값을 더함
      dp[i - 2] + inputs[i], // n번째 포도주를 마시고, n-2 최댓값을 더함
      dp[i - 1] // n번째 포도주를 마시지 않을때
    );
  }
}

dynamic(N);

console.log(dp[N - 1]);
