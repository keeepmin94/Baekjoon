const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input_ = require("fs").readFileSync(path).toString().trim().split("\n");
const n = input_[0];

function solution(input) {
  const len = input.length;
  let pos = 0;
  let rst = "";
  let mok = 0;
  let na = 0;

  while (pos < len) {
    if (input[pos] === ".") {
      pos++;
      rst += ".";
      continue;
    }
    let nextPos = input.indexOf(".", pos);
    nextPos = nextPos === -1 ? len : nextPos;
    const gap = nextPos - pos;
    if (gap % 2 === 1) {
      break;
    }
    // 4로 나눈 몫과 나머지 구하기
    mok = Math.trunc(gap / 4);
    console.log(mok);
    na = gap % 4;
    console.log(na);
    for (let i = 0; i < mok; i++) {
      rst += "AAAA";
    }
    pos += mok * 4;
    if (na > 0) {
      rst += "BB";
      pos += 2;
    }
  }

  if (rst.length === len) return rst;
  else return -1;
}

const r = solution(n);
console.log(r);
// const input = input_[0];

/*
그리디는 정령을 어떻게 할 것인지의 문제임.

1. 현재 X의 길이 구하기
2. X가 홀수면 -1
3. 짝수면 4로 나누고 그 자리까지 A로 변경
4. 남은 자리는 B로 변경
5. 다음 X찾기 
*/

/*
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt"; 
const input = require("fs").readFileSync(path).toString().trim().split('\n');

const n = input[0];

function solution(n){
n = n.replace(/XXXX/g, 'AAAA');
n = n.replace(/XX/g, 'BB');

if(n.split('').includes('X')){
    return -1 
}else{
    return n 
 }
}
const answer = solution(n);
console.log(answer);
*/
