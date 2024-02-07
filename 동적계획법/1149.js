const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...inputs] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

N = Number(N);
inputs = inputs.map((i) => i.split(" ").map(Number));

// function getCalcul() {
//   for (let i = 1; i < N; i++) {
//     for (let j = 0; j < 3; j++) {
//       let tmp = 1001;
//       for (let k = 0; k < 3; k++) {
//         if (j === k) continue;
//         tmp = Math.min(inputs[i - 1][k], tmp);
//       }
//       inputs[i][j] += tmp;
//     }
//   }
// }

// function getCalcul() {
//   for (let i = 1; i < N; i++) {
//     for (let j = 0; j < 3; j++) {
//       let tmp = 0;
//       switch (j) {
//         case 0:
//           tmp = Math.min(inputs[i - 1][j + 1], inputs[i - 1][j + 2]);
//           break;
//         case 1:
//           tmp = Math.min(inputs[i - 1][j - 1], inputs[i - 1][j + 1]);
//           break;
//         case 2:
//           tmp = Math.min(inputs[i - 1][j - 2], inputs[i - 1][j - 1]);
//           break;
//       }
//       inputs[i][j] += tmp;
//     }
//   }
// }

function getCalcul() {
  for (let i = 1; i < N; i++) {
    inputs[i][0] = Math.min(inputs[i - 1][1], inputs[i - 1][2]) + inputs[i][0];
    inputs[i][1] = Math.min(inputs[i - 1][0], inputs[i - 1][2]) + inputs[i][1];
    inputs[i][2] = Math.min(inputs[i - 1][0], inputs[i - 1][1]) + inputs[i][2];
  }
}

getCalcul();

console.log(Math.min(...inputs[N - 1]));
