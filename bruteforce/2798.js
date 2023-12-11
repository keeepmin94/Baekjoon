const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, input] = require("fs").readFileSync(path).toString().trim().split("\n");
const [N, M] = n.split(" ").map(Number);
input = input.split(" ").map(Number);

function solution(N, M, input) {
  let answer = 0;
  //let tmp = Array.from({ length: N });

  function dfs(cnt, pos, sum) {
    if (cnt === 3) {
      if (sum > answer && sum <= M) answer = sum;
    } else {
      for (let i = pos; i < N; i++) {
        //tmp[cnt] = input[i];
        dfs(cnt + 1, i + 1, sum + input[i]);
      }
    }
  }

  dfs(0, 0, 0);
  console.log(answer);
}

solution(N, M, input);
