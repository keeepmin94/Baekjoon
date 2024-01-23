const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, M] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = [0];
const result = [];

function backTrack() {
  if (arr.length === M + 1) {
    result.push(arr.slice(1)); // 깊은복사
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (arr[arr.length - 1] <= i) {
      arr.push(i);
      backTrack();
      arr.pop();
    }
  }
}

backTrack();

let str = "";
result.forEach((arr_tmp) => {
  str += arr_tmp.join(" ") + "\n";
});

console.log(str);
