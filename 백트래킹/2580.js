const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
let inputs = input.map((n) => n.split(" ").map(Number));

const arr = [];

// 빈 칸들 배열
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (inputs[i][j] === 0) arr.push([i, j]);
  }
}

const L = arr.length;
let str = "";

function dfs(cnt = 0) {
  if (cnt === L) {
    for (let row of inputs) {
      str += `${row.join(" ")}\n`;
    }
    console.log(str);
    process.exit(0);
  }

  const [i, j] = arr[cnt];
  for (let x = 1; x <= 9; x++) {
    if (checkSudoku(i, j, x)) {
      inputs[i][j] = x;
      dfs(cnt + 1);
      inputs[i][j] = 0;
    }
  }
}

function checkSudoku(i, j, x) {
  // 가로, 세로 체크
  for (let n = 0; n < 9; n++) {
    if (inputs[i][n] === x || inputs[n][j] === x) return false;
  }

  // 박스 범위 구하기
  const boxRow = Math.floor(i / 3) * 3;
  const boxCol = Math.floor(j / 3) * 3;

  // 3*3 박스 체크
  for (let a = boxRow; a < boxRow + 3; a++) {
    for (let b = boxCol; b < boxCol + 3; b++) {
      if (inputs[a][b] === x) return false;
    }
  }

  return true;
}

dfs();
