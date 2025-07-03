function solution(money) {
    const houseLength = money.length;
    
    // dp[i]는 i번째 집 도달 시 돈의 최대값
    const dp1 = new Array(houseLength).fill(0);    // 첫번째 집 방문
    const dp2 = new Array(houseLength).fill(0);    // 첫번째 집 미방문
    
    // 초기값 세팅
    dp1[0] = money[0];
    dp1[1] = money[0];
    dp2[1] = money[1];
    
    for (let i = 2; i < houseLength; i++) {
        // 방문시 [i - 2] + [i], 미방문시 [i - 1]
        dp1[i] = Math.max(dp1[i - 2] + money[i], dp1[i -1]);
        dp2[i] = Math.max(dp2[i - 2] + money[i], dp2[i -1]);
        
        // dp1은 마지막 집 방문 불가
        if (i === houseLength - 1) {
            dp1[i] = dp1[i - 1];
        }
    }
    
    return Math.max(dp1[houseLength - 1], dp2[houseLength - 1]);
}