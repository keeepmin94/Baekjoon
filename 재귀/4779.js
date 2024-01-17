const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let inputs = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function cantor(n) {
  if (n === 0) {
    return "-";
  }
  let s = Math.pow(3, n - 1);

  let str1 = cantor(n - 1);
  let str2 = "";
  for (let i = 0; i < s; i++) {
    str2 += " ";
  }
  let str3 = cantor(n - 1);

  return str1 + str2 + str3;
}

function soluntion() {
  inputs.forEach((cnt) => console.log(cantor(cnt)));
}

soluntion();
