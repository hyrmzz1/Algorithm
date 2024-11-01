const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number); // n: 국가 수, k: 등수 구할 국가

// 국가별 메달 수 기록할 배열 [국가, 금, 은, 동]
const medalCnt = input.slice(1).map((line) => {
  return line.split(" ").map(Number);
});

// 다중 조건 정렬
medalCnt.sort((a, b) => b[1] - a[1] || b[2] - a[2] || b[3] - a[3]);

// 순위 계산
let rank = 1;
let prevG = medalCnt[0][1];
let prevS = medalCnt[0][2];
let prevC = medalCnt[0][3];

for (let i = 0; i < medalCnt.length; i++) {
  if (
    medalCnt[i][1] !== prevG ||
    medalCnt[i][2] !== prevS ||
    medalCnt[i][3] !== prevC
  ) {
    rank++;

    // 점수 갱신
    prevG = medalCnt[i][1];
    prevS = medalCnt[i][2];
    prevC = medalCnt[i][3];
  }

  if (medalCnt[i][0] === k) {
      console.log(rank);
      break;
  }
}