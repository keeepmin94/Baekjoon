const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");
const [N, M] = n.split(" ").map(Number);
const J = Number(input.shift());
input = input.map(Number);
let count = 0;
const pos = { start: 0, end: M };

input.forEach((apple) => {
  if (apple > pos.end) {
    count += apple - pos.end;
    pos.start = apple - (M - 1);
    pos.end = apple;
  } else if (apple < pos.start) {
    count += pos.start - apple;
    pos.start = apple;
    pos.end = apple + (M - 1);
  }
});

console.log(count);

/*
현재 바구니 시작점, 끝점 지정
배열 돌면서 
오른쪽 방향이면 끝점에 맞춰 이동,
왼쪽 방향이면 시작점에 맞춰 이동 

왜 그리드 일까? 
-> 현재 가장 최소의 움직임을 계산해서?
-> 정렬은? 
*/
