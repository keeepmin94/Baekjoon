const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [input] = require("fs").readFileSync(path).toString().trim().split("\n");

const num = Number(input);

const arr = Array.from({ length: num + 1 }, () => 0);
//Array.from({length:5}, (v, i)=> i); 결과 : [0, 1, 2, 3, 4]

arr[1] = 1;
arr[2] = 2;

const tmp = 15746;

function dp(n) {
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % tmp;
  }

  return arr[n];
}

console.log(dp(num));

// 계단 문제
