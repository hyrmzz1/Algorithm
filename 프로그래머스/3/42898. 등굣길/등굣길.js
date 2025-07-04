function solution(m, n, puddles) {
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    dp[1][1] = 1;   // 초기값 세팅 (집)
    
    const puddleSet = new Set();
    for (const [c, r] of puddles) {
        puddleSet.add(`${r}-${c}`);
    }
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            // 집, 웅덩이는 패스
            if (i === 1 && j === 1) continue;
            if (puddleSet.has(`${i}-${j}`)) continue;
            
            dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
        }
    }
    
    return dp[n][m];
}