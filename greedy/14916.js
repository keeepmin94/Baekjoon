const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const n = input[0];

function solution(n) {
  let num = n;
  count = 0;
  while (1) {
    if (num % 2 === 1 || num % 5 === 0) {
      // 홀수이거나 5로 나누어떨어질 떄
      num -= 5;
      count++;
    } else {
      // 짝수 일때
      num -= 2;
      count++;
    }

    if (num <= 0) break;
  }

  if (num < 0) return -1;
  else return count;
}
const answer = solution(n);
console.log(answer);

/*
그리디의 대표적인 거스름돈 문제 
5원 -> 2원 차래대로 나누자 

13원의 경우는? 
나누기가 아니라 빼기로 반복문 돌리면서 해보자
number가 음수가 되면 2, 5로 불가능 한거승로  -1  
*/
