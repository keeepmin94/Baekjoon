const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, input] = require("fs").readFileSync(path).toString().trim().split("\n");

const inputs = input.split(" ").map(Number);

const set = new Set(inputs); //Set{3,5,1,7,9}
const newArr = [...set];

function soluntion() {
  const obj = {};
  let str = "";
  newArr.sort((a, b) => a - b);
  //inputs.forEach((i) => (str += newArr.indexOf(i) + " ")); // 시간초과) indexOf의 시간복잡도:O(n), for문 안에 쓰면 사실상 O(n^2)이라 시간초과 => object나 map 쓰자!
  newArr.forEach((el, i) => (obj[el] = i));
  //console.log(str.trim());
  inputs.forEach((i) => (str += obj[i] + " "));
  console.log(str.trim());
}

soluntion();
