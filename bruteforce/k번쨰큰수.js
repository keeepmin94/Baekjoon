const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, input] = require("fs").readFileSync(path).toString().trim().split("\n");
const [N, K_] = n.split(" ").map(Number);
const inputs = input.split(" ").map(Number);

function solution() {
  const set = new Set();
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        set.add(inputs[i] + inputs[j] + inputs[k]);
      }
    }
  }
  const arr = Array.from(set).sort((a, b) => b - a);
  return arr[K_ - 1];
}

const rst = solution();
console.log(rst);

/*
3장 뽑는거 고정 => 3중for문?
100까지임으로 3중for문 가능
*/
