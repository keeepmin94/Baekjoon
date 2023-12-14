const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
const inputs = input[0].split(" ").map(Number);

function solution(inputs) {
  const [a, b, c, d, e, f] = inputs;

  for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
      if (a * x + b * y === c && d * x + e * y === f) {
        console.log(`${x} ${y}`);
        return;
      }
    }
  }
}

solution(inputs);
