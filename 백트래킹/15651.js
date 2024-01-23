const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, M] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = [];
const result = [];

function backTrack() {
  if (arr.length === M) {
    result.push(arr.slice()); // 깊은복사
    return;
  }

  for (let i = 1; i <= N; i++) {
    arr.push(i);
    backTrack();
    arr.pop();
  }
}

backTrack(0, 1);

let str = "";
result.forEach((arr_tmp) => {
  str += arr_tmp.join(" ") + "\n";
});

console.log(str);
