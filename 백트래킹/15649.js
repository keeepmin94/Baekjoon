const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, M] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = Array(N + 1).fill(0);
const tmp = Array(M).fill(0); // 순열 임시 배열
const result = [];

function backTrack(cnt) {
  if (cnt === M) {
    result.push(tmp.slice()); // 깊은복사
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (arr[i] === 0) {
      arr[i] = 1;
      tmp[cnt] = i;
      backTrack(cnt + 1);
      arr[i] = 0;
    }
  }
}

backTrack(0);

let str = "";
result.forEach((arr_tmp) => {
  str += arr_tmp.join(" ") + "\n";
});

console.log(str);
