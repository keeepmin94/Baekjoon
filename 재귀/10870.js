const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N] = require("fs").readFileSync(path).toString().trim().split("\n");
let answer = 0;

function dfs(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return dfs(n - 2) + dfs(n - 1);
}

function solution() {
  const num = Number(N);

  const result = dfs(num);
  console.log(result);
}

solution();
