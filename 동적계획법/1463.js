// 1로 만들기
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N] = require("fs").readFileSync(path).toString().trim().split("\n");

N = Number(N);

const dp = Array.from({ length: N + 1 }, () => 0);

dp[2] = 1;
dp[3] = 1;

function dynamic(n) {
  if (n <= 3) return dp[n];

  let i = 4;
  while (i <= n) {
    dp[i] = dp[i - 1] + 1;
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
    i++;
  }

  return dp[n];
}

const rst = dynamic(N);

console.log(rst);
