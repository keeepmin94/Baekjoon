const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...input] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

const inputs = input.map((el) => el.split(" ").map(Number));

function soluntion() {
  inputs.sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0] < b[0]) return -1;
    }
    return a[1] - b[1];
  });
}

soluntion();
const result = inputs.map((el) => el.join(" ")).join("\n");
console.log(result);
