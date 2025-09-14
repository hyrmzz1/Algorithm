function solution(m, n, puddles) {
    const MOD = 1000000007;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    
    // 웅덩이 표시
    for (const [i, j] of puddles) {
        dp[j][i] = -1;
    }
    
    dp[1][1] = 1;   // 시작점 표시
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            // 웅덩이 -> 스킵
            if (dp[i][j] === -1) {
                continue;
            }
            
            if (i === 1 && j === 1) {
                continue;
            }
            
            const top = dp[i - 1][j] === -1 ? 0 : dp[i - 1][j];
            const left = dp[i][j - 1] === -1 ? 0 : dp[i][j - 1];
            
            dp[i][j] = (top + left) % MOD;
        }
    }
    
    return dp[n][m];
}