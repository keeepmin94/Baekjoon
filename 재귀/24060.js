const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const inputs = input[1].split(" ").map(Number);

function merge(left, right) {
  const result = [];
  let [i, j] = [0, 0];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      // left와 right 요소끼리 비교
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
    count++;
    if (count === K) {
      target = result[result.length - 1]; // count와 K가 같다면, 마지막으로 추가해준 값 출력
    }
  }

  while (i < left.length) {
    result.push(left[i]); // left에 남아있는 값을 추가
    i++;
    count++;
    if (count === K) {
      target = result[result.length - 1];
    }
  }

  while (j < right.length) {
    result.push(right[j]); // right에 남아있는 값을 추가
    j++;
    count++;
    if (count === K) {
      target = result[result.length - 1];
    }
  }
  return result;
}

// 정렬되지 않은 배열 arr를 요소 1개만 가진 배열이 될 때까지 쪼개기
let count = 0;
let target;

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid, arr.length));

  return merge(left, right);
}

mergeSort(inputs);
if (!target) {
  target = -1;
}
console.log(target);

// function merge_sort(l, r) {
//   if (l - r <= 1) {
//   }
//   if (l < r) {
//     const m = Math.floor((l + r) / 2);
//     merge_sort(l, m);
//     merge_sort(m + 1, r);
//     return merge(l, m, r);
//   }
// }

// function merge(l, m, r) {
//   let i = l,
//     j = m;
//   const result = [];
//   while (i <= m && j <= r) {
//     if (inputs[i] <= inputs[j]) {
//       result.push(inputs[i]);
//       i++;
//     } else {
//       result.push(inputs[j]);
//       j++;
//     }
//   }
//   while (i <= m) {
//     result.push(inputs[i]);
//     i++;
//   }
//   while (j <= r) {
//     result.push(inputs[j]);
//     j++;
//   }

//   return result;
// }

// const test = merge_sort(0, inputs.length - 1);
// console.log(test);

/*
merge_sort(A[p..r]) { # A[p..r]을 오름차순 정렬한다.
    if (p < r) then {
        q <- ⌊(p + r) / 2⌋;       # q는 p, r의 중간 지점
        merge_sort(A, p, q);      # 전반부 정렬
        merge_sort(A, q + 1, r);  # 후반부 정렬
        merge(A, p, q, r);        # 병합
    }
}

# A[p..q]와 A[q+1..r]을 병합하여 A[p..r]을 오름차순 정렬된 상태로 만든다.
# A[p..q]와 A[q+1..r]은 이미 오름차순으로 정렬되어 있다.
merge(A[], p, q, r) {
    i <- p; j <- q + 1; t <- 1;
    while (i ≤ q and j ≤ r) {
        if (A[i] ≤ A[j])
        then tmp[t++] <- A[i++]; # tmp[t] <- A[i]; t++; i++;
        else tmp[t++] <- A[j++]; # tmp[t] <- A[j]; t++; j++;
    }
    while (i ≤ q)  # 왼쪽 배열 부분이 남은 경우
        tmp[t++] <- A[i++];
    while (j ≤ r)  # 오른쪽 배열 부분이 남은 경우
        tmp[t++] <- A[j++];
    i <- p; t <- 1;
    while (i ≤ r)  # 결과를 A[p..r]에 저장
        A[i++] <- tmp[t++]; 
}
*/
