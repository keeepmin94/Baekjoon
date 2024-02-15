// 쉬운 계단 수
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N] = require("fs").readFileSync(path).toString().trim().split("\n");

N = Number(N);

const num = 1000000000;

const dp = Array.from(new Array(N + 1), () => new Array(10));
//dp[n][i]를 n자리수 이면서 i로 끝나는 경우

dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
dp[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1]; // 0으로 시작할 수 없기 깨문에 2자리까지 수기로 구하기

function dynamic(n) {
  for (let i = 3; i <= N; i++) {
    for (let j = 0; j < 10; j++) {
      // 0으로 끝나기 때문에 바로 앞에 올수 있는 숫자는 1밖에 없음
      if (j === 0) dp[i][j] = dp[i - 1][j + 1] % num;

      // 1~8까지이기 때문에 바로 앞에 올수 있는 숫자는 j-1, j+1 개의 경우의 수
      if (j > 0 && j < 9)
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % num;

      // 9로 끝나기 때문에 바로 앞에 올수있는 숫자는 8밖에 없음
      if (j === 9) dp[i][j] = dp[i - 1][j - 1] % num;
    }
  }
}

dynamic(N);
const sum = dp[N].reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(sum % num);
