const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const inputs = input[1].split(" ").map(Number);

// 삽입 정렬
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let cur = array[i];
    let left = i - 1;
    while (left >= 0 && array[left] > cur) {
      array[left + 1] = array[left];
      left--;
    }
    array[left + 1] = cur;
    //console.log(`${i}회전: ${array}`);
  }
  return array;
}

const iSort = insertionSort(inputs);
console.log(iSort[N - M]);
