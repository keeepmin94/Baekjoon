const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...inputs] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

N = Number(N);
inputs = inputs.map(Number);

const arr = Array.from({ length: N + 1 }, () => 0);
arr[1] = 1;
arr[2] = 1;
arr[3] = 1;

const max = Math.max(...inputs);

function dynamicProgramming(n) {
  for (let i = 4; i <= max; i++) {
    arr[i] = arr[i - 3] + arr[i - 2];
  }
}
dynamicProgramming(N);

let str = "";

inputs.forEach((i) => (str += `${arr[i]}\n`));

console.log(str);

// 문제 이해보다 점화식 찾는데 집중하자

10, -4, 3, 1, 5, 6, -35, 12, 21, -1
