const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
const test = input.map((i) => i.split(" ").map(Number));

function solution(test) {
  const M = test.length;
  const N = test[0].length;
  let answer = 0;

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      let cnt = 0;
      for (let t = 0; t < M; t++) {
        let mento;
        let menti;
        for (let s = 0; s < N; s++) {
          if (test[t][s] === i) mento = s;
          if (test[t][s] === j) menti = s;
        }
        if (mento < menti) cnt++;
      }
      if (cnt === M) answer++;
    }
  }

  return answer;
}

const rst = solution(test);
console.log(rst);

/*
완전탐색 -> 
  1. for문
  2. 재귀
*/
