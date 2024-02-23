// 가장 긴 바이토닉 부분 수열
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...inputs] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

N = Number(N);
inputs = inputs[0].split(" ").map(Number);

const upDp = new Array(N);
const downDp = new Array(N);
upDp[0] = 1;
downDp[N - 1] = 1;

function dynamic() {
  // 증가하는 부분수열 구하기
  for (let i = 1; i < N; i++) {
    upDp[i] = 1;
    let max = 1;
    for (let j = 0; j <= i; j++) {
      if (inputs[i] > inputs[j]) upDp[i] = Math.max(upDp[i], upDp[j] + 1);
    }
  }

  // 감소하는 부분수열 구하기
  for (let i = N - 2; i >= 0; i--) {
    downDp[i] = 1;
    let max = 1;
    for (let j = i + 1; j < N; j++) {
      if (inputs[i] > inputs[j]) downDp[i] = Math.max(downDp[i], downDp[j] + 1);
    }
  }
}

dynamic();

// console.log(upDp);
// console.log(downDp);

const rst = [];

for (let i = 0; i < N; i++) {
  rst.push(upDp[i] + downDp[i]);
}

console.log(Math.max(...rst) - 1);

// 최대 증가 수열 과 최대 감소 수열 구간을 따로 구해서 합하기
