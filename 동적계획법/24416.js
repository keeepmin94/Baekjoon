const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [input] = require("fs").readFileSync(path).toString().trim().split("\n");

const M = Number(input);
let cntDfs = 0;
let cntDp = 0;

function dfs(n) {
  if (n === 1 || n === 2) {
    cntDfs++;
    return 1;
  }
  return dfs(n - 2) + dfs(n - 1);
}

const arr = new Array(M + 1).fill(false);
arr[1] = 1;
arr[2] = 1;

function dp(n) {
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
    cntDp++;
  }
  return arr[n];
}

dfs(M);
dp(M);

console.log(cntDfs, cntDp);
