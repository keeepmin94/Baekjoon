const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, inputs] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

N = Number(N);
inputs = inputs.split(" ").map(Number);

let max = Number.MIN_SAFE_INTEGER;
const arr = Array.from({ length: N }, () => 0);
arr[0] = inputs[0];
function DynamicProgramming(n) {
  for (let i = 1; i < n; i++) {
    arr[i] = Math.max(inputs[i], arr[i - 1] + inputs[i]);
  }
}

DynamicProgramming(N);

console.log(Math.max(...arr));
