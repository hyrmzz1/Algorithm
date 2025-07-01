// top-down
function solution(triangle) {
    const dp = triangle.map(row => [...row]);
    
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j === 0) {
                dp[i][j] += dp[i - 1][j];
            } else if (j === triangle[i].length - 1) {
                dp[i][j] += dp[i - 1][j - 1];
            } else {
                dp[i][j] += Math.max(dp[i - 1][j], dp[i - 1][j - 1]);
            }
        }
    }
    
    return Math.max(...dp[triangle.length - 1]);
}