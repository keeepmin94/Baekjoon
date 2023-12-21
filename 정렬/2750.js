const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...input] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");
const inputs = input.map(Number);

// 버블 정렬
function bubbleSort(arr) {
  for (let i = 0; i < N; i++) {
    let bool = false;
    for (let j = 0; j < N - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        bool = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!bool) break;
  }
  return arr;
}

const bSort = bubbleSort(inputs);
bSort.forEach((b) => console.log(b));

/*
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...inputs] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");
let answer = 0;

function solution() {
  inputs.sort((a, b) => Number(a) - Number(b));
  inputs.forEach((a) => console.log(Number(a)));
}

solution();
*/
