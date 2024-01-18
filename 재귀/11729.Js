const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N_] = require("fs").readFileSync(path).toString().trim().split("\n");
const N = Number(N_);
let cnt = 0;
let str = "";

function Hanoi(n, from, tmp, to) {
  if (n === 1) {
    // 원반이 한개일떄는 출발지에서 목적지로
    // 재귀의 종료 지점
    str += `${from} ${to} \n`;
    cnt++;
    return;
  }

  // Hanoi(N-1)
  Hanoi(n - 1, from, to, tmp);

  // + 1
  str += `${from} ${to} \n`;
  cnt++;

  // Hanoi(N-1)
  Hanoi(n - 1, tmp, from, to);
}

Hanoi(N, "1", "2", "3");

console.log(cnt);
console.log(str);

// Hanoi(N) = 1 + (2 * Hanoi(N-1))
// 2^n -1
