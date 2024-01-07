const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...inputs] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 삽입 정렬
function sortArr() {
  inputs.sort((a, b) => a - b);
  console.log(inputs.join("\n")); // 반복문 시간초과
}
sortArr();
