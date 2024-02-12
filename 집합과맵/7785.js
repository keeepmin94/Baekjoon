const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...inputs] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

N = Number(N);
inputs = inputs.map((s) => s.split(" "));

const map = new Map();

inputs.forEach((tmp) => {
  map.set(tmp[0], tmp[1]);
});
result = [];
map.forEach((e, tmp) => {
  if (map.get(tmp) === "leave") map.delete(tmp);
  else result.push(tmp);
});

result.sort().reverse();

console.log(result.join("\n"));
