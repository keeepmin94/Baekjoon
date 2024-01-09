const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N] = require("fs").readFileSync(path).toString().trim().split("\n");
let answer = 0;

function dfs(n) {
  if (n === 1) return 1;

  return n * dfs(n - 1);
}

function solution() {
  const num = Number(N);
  if (num === 0) {
    console.log(1);
    return;
  }
  const result = dfs(num);
  console.log(result);
}

solution();
