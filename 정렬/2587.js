const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
const inputs = input.map(Number);
const len = inputs.length;

//선택 정렬
function selectionSort(arr) {
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) min = j;
    }

    if (min !== i) [arr[min], arr[i]] = [arr[i], arr[min]];
  }
  return arr;
}

const sortArr = selectionSort(inputs);
const sum = sortArr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum / len);
console.log(sortArr[Math.floor(len / 2)]);

/*
// js 내장 정렬
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
const inputs = input.map(Number);

function solution() {
  inputs.sort();
  const sum = inputs.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  console.log(sum / 5);
  console.log(inputs[2]);
}

solution();
*/
