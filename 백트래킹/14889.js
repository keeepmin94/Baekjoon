const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...input] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");
let inputs = input.map((n) => n.split(" ").map(Number));

N = Number(N);
const M = N / 2;

let answer = Number.MAX_SAFE_INTEGER;

function dfs(start = [], idx = 1) {
  if (start.length === M) {
    const link = getLinkTeam(start);
    answer = Math.min(answer, Math.abs(getScore(start) - getScore(link)));
    return;
  }

  for (let i = idx; i <= N; i++) { // 순열로 구할시 시간초과, 조합으로 구해야함 
    if (start.indexOf(i) === -1) {
      start.push(i);
      dfs(start, i + 1);
      start.pop();
    }
  }
}

function getLinkTeam(start) {
  const link = [];

  for (let i = 1; i <= N; i++) {
    if (start.indexOf(i) === -1) link.push(i);
  }

  return link;
}

function getScore(team) {
  let sum = 0;
  for (let i = 0; i < team.length; i++) {
    for (let j = 0; j < team.length; j++) {
      sum += inputs[team[i] - 1][team[j] - 1];
    }
  }

  return sum;
}

dfs();

console.log(answer);

// --------------------------------------

// const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let [N, ...input] = require("fs")
//   .readFileSync(path)
//   .toString()
//   .trim()
//   .split("\n");
// let inputs = input.map((n) => n.split(" ").map(Number));

// N = Number(N);
// const M = N / 2;

// let answer = Number.MAX_SAFE_INTEGER;

// const arr = new Array(N + 1).fill(false);

// function dfs(cnt, idx) {
//   if (cnt === M) {
//     const start = getStartTeam();
//     const link = getLinkTeam();
//     answer = Math.min(answer, Math.abs(getScore(start) - getScore(link)));
//     return;
//   }

//   for (let i = idx; i <= N; i++) {
//     arr[i] = true;
//     dfs(cnt + 1, i + 1);
//     arr[i] = false;
//   }
// }

// function getStartTeam() {
//   const start = [];

//   for (let i = 1; i <= N; i++) {
//     if (arr[i]) start.push(i);
//   }

//   return start;
// }

// function getLinkTeam() {
//   const link = [];

//   for (let i = 1; i <= N; i++) {
//     if (!arr[i]) link.push(i);
//   }

//   return link;
// }

// function getScore(team) {
//   let sum = 0;
//   for (let i = 0; i < team.length; i++) {
//     for (let j = 0; j < team.length; j++) {
//       sum += inputs[team[i] - 1][team[j] - 1];
//     }
//   }

//   return sum;
// }

// dfs(0, 1);

// console.log(answer);
