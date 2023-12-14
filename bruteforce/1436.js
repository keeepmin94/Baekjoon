const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N] = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  let count = N;
  let start = 665;
  while (count > 0) {
    start++;
    if (start.toString().indexOf("666") >= 0) count--;
  }

  console.log(start);
}

solution();
