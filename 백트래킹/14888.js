const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
const [N_, inputs, calcul] = input.map((n) => n.split(" ").map(Number));
const N = N_[0];
let min_ = Number.MAX_SAFE_INTEGER;
let max_ = Number.MIN_SAFE_INTEGER;

function dfs(sum, cnt, op, cal) {
  switch (op) {
    case 0:
      sum += inputs[cnt];
      break;
    case 1:
      sum -= inputs[cnt];
      break;
    case 2:
      sum *= inputs[cnt];
      break;
    case 3:
      sum = parseInt(sum / inputs[cnt]);
      break;
  }

  if (cnt === N - 1) {
    min_ = Math.min(sum, min_);
    max_ = Math.max(sum, max_);

    return;
  }

  for (let i = 0; i < 4; i++) {
    if (cal[i] > 0) {
      cal[i] = cal[i] - 1;
      dfs(sum, cnt + 1, i, cal);
      cal[i] = cal[i] + 1;
    }
  }
}

for (let i = 0; i < 4; i++) {
  let cal_ = calcul.slice();
  if (cal_[i] > 0) {
    cal_[i] = cal_[i] - 1;
    dfs(inputs[0], 1, i, cal_);
    cal_[i] = cal_[i] + 1;
  }
}

// -0으로 출력된다. 자바스크립트의 number가 실수형이라서 +0과 -0이 나온다고 합니다.
// 그래서 -0으로 출력되는걸 0으로 고치게 한 코드입니다. -0과 0은 같습니다. 하지만 정답이 아니라서 오류가 난거죠
console.log(max_ === -0 ? 0 : max_);
console.log(min_ === -0 ? 0 : min_);

//https://www.acmicpc.net/board/view/74572
