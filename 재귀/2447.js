const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N_] = require("fs").readFileSync(path).toString().trim().split("\n");
const N = Number(N_);
const arr = Array.from(Array(N), () => Array(N).fill(1));
let result = "";
let yCnt = 0;

function makeStar(n, y, x) {
  if (n === 1) result += "*";
  else if (y % 3 === 1 && x % 3 === 1) result += " ";
  else makeStar(parseInt(n / 3), parseInt(y / 3), parseInt(x / 3));

  return;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i === 9 && j === 9) {
      yCnt++;
    }
    makeStar(N, i, j);
  }
  result += "\n";
}

console.log(result);
