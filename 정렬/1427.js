const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N] = require("fs").readFileSync(path).toString().trim().split("\n");

function soluntion() {
  const arr = Array.from(N);
  arr.sort((a, b) => b - a);
  let tmp = 1;
  let rst = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    rst += Number(arr[i] * tmp);
    tmp = tmp * 10;
  }

  console.log(rst);
}

soluntion();
