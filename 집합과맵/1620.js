//나는야 포켓몬 마스터 이다솜

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [number, ...inputs] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

const [N, M] = number.split(" ").map(Number);

const numMap = new Map();
const titleMap = new Map();

for (let i = 0; i < N; i++) {
  numMap.set(i + 1, inputs[i]);
  titleMap.set(inputs[i], i + 1);
}
let str = [];
for (let i = N; i < N + M; i++) {
  if (isNaN(inputs[i])) str.push(titleMap.get(inputs[i]));
  else str.push(numMap.get(Number(inputs[i])));
}

console.log(str.join("\n"));
