const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
const inputs = input[0].split(" ").map(Number);

function solution(inputs) {
  let maxNum = -1;
  let maxSum = -1;

  for (let i = 0; i < inputs.length; i++) {
    // 자릿수의 합 구하기
    let num = inputs[i];
    let sum = 0;

    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    if (sum > maxSum) {
      maxNum = inputs[i];
      maxSum = sum;
    } else if (sum === maxSum) {
      if (inputs[i] > maxNum) {
        maxNum = inputs[i];
        //maxSum = sum;
      }
    }
  }

  return maxNum;
}

const rst = solution(inputs);
console.log(rst);

/*
완전탐색 -> 
  1. for문
  2. 재귀
*/
