//숫자 카드2

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, myCards, M, isCards] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");
N = Number(N);
M = Number(M);
myCards = myCards.split(" ").map(Number);
isCards = isCards.split(" ").map(Number);

const map = new Map();

myCards.forEach((i) => {
  if (map.has(i)) map.set(i, map.get(i) + 1);
  else map.set(i, 1);
});

const result = [];

isCards.forEach((i) => {
  if (map.has(i)) result.push(map.get(i));
  else result.push(0);
});

console.log(result.join(" "));
