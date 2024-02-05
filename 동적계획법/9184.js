const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

let dp = [];
for (let i = 0; i < 51; i++) {
  dp[i] = [];
  for (let j = 0; j < 51; j++) {
    dp[i][j] = [];
    for (let k = 0; k < 51; k++) {
      dp[i][j][k] = 0;
    }
  }
}

function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return 1;
  if (a > 20 || b > 20 || c > 20) {
    return w(20, 20, 20);
  }

  if (dp[a][b][c] !== 0) return dp[a][b][c];

  if (a < b && b < c)
    dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
  else {
    dp[a][b][c] =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);
  }

  return dp[a][b][c];
}

const result = inputs.map((n) => {
  const [a, b, c] = n;
  return `w(${a}, ${b}, ${c}) = ${w(a, b, c)}`;
});
result.pop();
console.log(result.join("\n"));
