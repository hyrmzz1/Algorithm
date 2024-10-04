// DP
function solution(x, y, n) {
    const dp = new Array(y + 1).fill(Infinity);
    dp[x] = 0;  // x를 x로 변환하기 위한 최소 연산 횟수는 0
    
    for (let i = x; i <= y; i++) {
        if (dp[i] === Infinity) continue;
        
        if (i + n <= y) {
            dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
        }
        
        if (i * 2 <= y) {
            dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
        }
        
        if (i * 3 <= y) {
            dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
        }
    }
    
    return dp[y] !== Infinity ? dp[y] : -1;
}