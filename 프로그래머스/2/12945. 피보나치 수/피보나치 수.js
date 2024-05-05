function solution(n) {  // bottom-up
    const dpTable = new Array(n + 1).fill(0);
    
    dpTable[0] = 0;
    dpTable[1] = 1;
    
    // dpTable 채우기
    for (let i = 2; i <= n; i++) {
        dpTable[i] = (dpTable[i - 1] + dpTable[i - 2]) % 1234567;
    }
    
    return dpTable[n];
}