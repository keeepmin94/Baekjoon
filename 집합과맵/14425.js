const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [numbers, ...inputs] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");
const [N, M] = numbers.split(" ").map(Number);

const N_Arr = [];
const M_Arr = [];

const map = new Map();
for (let i = 0; i < N; i++) {
  map.set(inputs[i]);
}
for (let i = N; i < N + M; i++) {
  M_Arr.push(inputs[i]);
}

let cnt = 0;

M_Arr.forEach((s) => {
  if (map.has(s)) cnt++;
});

console.log(cnt);
