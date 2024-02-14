const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...inputs] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

N = Number(N);
inputs = inputs.map((i) => i.split(" ").map(Number));

// console.log(N);
// console.log(inputs);

function dynamic(n) {
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < inputs[i].length; j++) {
      if (j === 0) inputs[i][j] += inputs[i - 1][j];
      else if (j === i) inputs[i][j] += inputs[i - 1][j - 1];
      else {
        let tmp = Math.max(inputs[i - 1][j - 1], inputs[i - 1][j]);
        inputs[i][j] += tmp;
      }
    }
  }
}

dynamic(N);

console.log(Math.max(...inputs[inputs.length - 1]));
