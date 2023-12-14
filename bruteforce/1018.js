const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...inputs] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");
const [N, M] = n.split(" ").map(Number);
const bLen = 8;
let arr = [];
let answer = 100;
let white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];
let black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function checkCnt(y, x) {
  let countW = 0;
  let countB = 0;
  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (inputs[i][j] !== black[i - y][j - x]) countB++;
      if (inputs[i][j] !== white[i - y][j - x]) countW++;
    }
  }
  answer = Math.min(answer, countW, countB);
}

function solution() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (i + bLen > N || j + bLen > M) continue;

      checkCnt(i, j);
    }
  }
}

solution();
console.log(answer);

/*
N = 세로 M=가로
1. 보드판 돌면서 8*8로 자를수 있는 위치 파악하기
2. 가능한 위치 바꿔야할 개수 파악하기 
*/
