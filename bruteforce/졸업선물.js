const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");
const [N, M] = n.split(" ").map(Number);
const inputs = input[0].split(" ").map(Number);

function solution(inputs) {
  inputs.sort((a, b) => {
    return a[0] + a[1] - (b[0] + b[1]);
  });
  let answer = 0;
  for (let i = 0; i < N; i++) {
    let cnt = 1;
    let sum = M - inputs[i][0] / 2 + inputs[i][1];

    for (let j = 0; j < M; j++) {
      if (i === j) continue;
      const tmp = inputs[j][0] + inputs[j][1];
      if (sum - tmp < 0) break;
      cnt++;
      sum -= tmp;
    }

    answer = Math.max(answer, cnt);
  }

  return answer;
}

const rst = solution(gifts);
console.log(rst);

/*
학생수가 1000이니까 2중 for문으로? (가격, 배송비가 따로이기 떄문에 무조건 비싼걸 할인해도 이득이 아님 -> 모든 경우의수를 해보기)
(하나씩 할인해보기))
정렬은 합친거 오름차순 
*/