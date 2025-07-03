function solution(N, number) {
    const dp = Array.from({ length: 9 }, () => new Set());  // dp[0]은 사용 X
    
    // dp[i]는 N을 i번 사용해 만들 수 있는 수들의 집합
    for (let i = 1; i < 9; i++) {
        // 1. N을 i번 연결한 수
        dp[i].add(Number(N.toString().repeat(i)));
        
        // 2. dp[3]은 dp[1]과 dp[2]의 모든 수들을 사칙연산한 조합
        for (let j = 1; j < i; j++) {
            for (const num1 of dp[j]) {
                for (const num2 of dp[i - j]) {
                    dp[i].add(num1 + num2);
                    
                    dp[i].add(num1 * num2);
                    
                    dp[i].add(num1 - num2);
                    dp[i].add(num2 - num1);
                    
                    if (num2 !== 0) dp[i].add(Math.floor(num1 / num2));
                    if (num1 !== 0) dp[i].add(Math.floor(num2 / num1));
                }
            }
        }
        
        // dp[i]에 number가 있을 시 즉시 i 반환
        if (dp[i].has(number)) return i;
    }
    
    // dp[1] ~ dp[8]에 number가 없는 경우
    return -1;
}