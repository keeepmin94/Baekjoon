const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let inputs = require("fs").readFileSync(path).toString().trim().split("\n");

const arr1 = inputs[1].split(" ").map(Number);
const arr2 = inputs[3].split(" ").map(Number);
const N = Number(inputs[0]);
const M = Number(inputs[2]);
const rst = [];
const has = new Map();

arr1.forEach((n) => {
  has.set(n, true);
});

arr2.forEach((n) => {
  if (has.has(n)) rst.push(1);
  else rst.push(0);
});

console.log(rst.join(" "));
