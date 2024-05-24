function solution(m, n, puddles) {
    const arr = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));
    
    puddles.forEach(puddle => { arr[puddle[1]][puddle[0]] = -1; })
    
    // (1,1)에서 출발
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (i === 1 && j === 1) {
                arr[i][j] = 1;  // 출발 지점 초기화
                continue;
            }
            
            if (arr[i][j] === -1) { // 웅덩이
                arr[i][j] = 0;
                continue;
            }
            
            arr[i][j] += (arr[i - 1][j] + arr[i][j - 1]) % 1000000007;
        }
    }
    
    return arr[n][m];
}