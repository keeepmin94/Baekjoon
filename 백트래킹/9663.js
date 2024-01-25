const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = Number(require("fs").readFileSync(path));
let answer = 0;

function check(board, row) {
  // 각 row만 확인하기(0번째 부터 현재 row 전 까지 현재 row와 비교)(어차피 퀸은 같은 row에 1만 존재)
  for (let i = 1; i < row; i++) {
    if (board[i] === board[row]) return false; // 같은 컬럼인지 확인
    if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) return false; // 대각선 라인 확인 (1시, 5시 양쪽)
  }

  return true;
}

function backTrack(board, row) {
  if (row === N) {
    answer++;
    //return;
  } else {
    for (let i = 1; i <= N; i++) {
      board[row + 1] = i;
      if (check(board, row + 1)) backTrack(board, row + 1);
    }
  }
}

for (let i = 1; i <= N; i++) {
  //const arr = Array.from({ length: N }, () => 0);
  const arr = new Array(N + 1).fill(0);
  arr[1] = i; // 어차피 첫줄에 한개의 퀸이 무조건 있어야함 (첫째줄에 퀸이 어느 위치에 있느냐에 따라 가능 불가능 나눠짐)
  backTrack(arr, 1);
}

console.log(answer);
