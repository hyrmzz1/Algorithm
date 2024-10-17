// 스티커모으기(2) 문제와 유사. 원형 DP
function solution(money) {
    // dp table) 해당 인덱스의 집에 도달하기까지의 돈의 최댓값을 기록
    const dp1 = new Array(money.length).fill(0); // 첫 번째 집 방문
    dp1[0] = money[0];
    dp1[1] = money[0];  // 인접하므로 방문 X
    
    const dp2 = new Array(money.length).fill(0); // 첫 번째 집 방문 X
    dp2[1] = money[1];
    
    // 인덱스 0, 1은 채웠으므로 2부터 순회
    for (let i = 2; i < money.length; i++) {
        if (i === money.length - 1) {
            dp1[i] = dp1[i - 1];    // 첫 번째 집 방문했다면 마지막 집 방문 불가 (인접)
        } else {
            dp1[i] = Math.max(dp1[i - 1], money[i] + dp1[i - 2]);
        }
        dp2[i] = Math.max(dp2[i - 1], money[i] + dp2[i - 2]);
    }
    
    return Math.max(dp1[money.length - 1], dp2[money.length - 1]);
}