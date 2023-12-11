const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
const inputs = input[0].split(" ").map(Number);

function solution(inputs) {
  let str = "";
  inputs.forEach((num) => {
    const num_ = reverse(num);
    if (isPrime(num_)) str += num_ + " ";
  });

  return str;
}

// 소수 판별하기
const isPrime = (number) => {
  if (number < 2) return false; // 자연수가 아닌 경우

  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

// 숫자 뒤집기
const reverse = (x) => {
  revInt = String(x).split("").reverse().join("");

  return Math.sign(x) * parseInt(revInt);
};

const rst = solution(inputs);
console.log(rst);

/*
완전탐색 -> 
  1. for문
  2. 재귀
*/

// function isPrime(num){
//   if(num===1) return false;
//   for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
//       if(num%i===0) return false;
//   }
//   return true;
// }
// function solution(arr){
//   let answer=[];
//   for(let x of arr){
//       let res=0;
//       while(x){
//           let t=x%10;
//           res=res*10+t;
//           x=parseInt(x/10);
//       }
//       if(isPrime(res)) answer.push(res);
//   }
//   return answer;
// }

// let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(arr));
