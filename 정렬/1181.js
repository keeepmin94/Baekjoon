const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...input] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

//중복제거
const set = new Set(input); //Set{3,5,1,7,9}

// 객체 -> 배열
// - array.from()
const inputs = Array.from(set); //[3,5,1,7,9]

// - 전개연산자(spread operator)... 사용
// const newArray = [...set];

function soluntion() {
  inputs.sort((a, b) => {
    if (a.length === b.length) {
      if (a < b) return -1;
    }
    return a.length - b.length;
  });
}

soluntion();
console.log(inputs.join("\n"));
