const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, M] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const tmp = Array(M).fill(0);
const result = [];

function backTrack(cnt, idx) {
  if (cnt === M) {
    result.push(tmp.slice()); // 깊은복사
    return;
  }

  for (let i = idx; i <= N; i++) {
    tmp[cnt] = i;
    backTrack(cnt + 1, i + 1);
  }
}

backTrack(0, 1);

let str = "";
result.forEach((arr_tmp) => {
  str += arr_tmp.join(" ") + "\n";
});

console.log(str);

//조합