const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N] = require("fs").readFileSync(path).toString().trim().split("\n");
let answer = 0;

function solution() {
  let num = N;
  while (1) {
    if (num % 5 === 0) {
      console.log(answer + num / 5);
      break;
    }
    if (num < 0) {
      console.log(-1);
      break;
    }
    num -= 3;
    answer++;
  }
}

solution();

// let answer = Number.MAX_VALUE;

// function solution() {
//   function dfs(cnt, now) {
//     if (now <= 0) {
//       if (now === 0) answer = Math.min(answer, cnt);
//     } else {
//       dfs(cnt + 1, now - 5);
//       dfs(cnt + 1, now - 3);
//     }
//   }

//   dfs(0, N);

//   if (answer === Number.MAX_VALUE) console.log(-1);
//   else console.log(answer);
// }

// solution();

/*
3kg, 5kg -> 선택 재귀함수로?
-> 시간초과 
*/