const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
const N = Number(input[0]);

function solution(N) {
  let rst = 0;
  let M = 0;
  let sum = 0;
  while (1) {
    M++;
    sum = M;
    for (let i = 0; i < M.toString().length; i++) {
      sum += Number(M.toString().charAt(i));
    }

    if (sum === N) {
      rst = M;
      break;
    }
    if (M >= N) break;
  }

  console.log(rst);
}

solution(N);

/*
조합으로 3가지 모든 경우의수 구하기 
*/
