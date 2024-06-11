function solution(n) {
    const answer = Array.from({length: n}, (_, idx) => new Array(idx + 1).fill(0));
    
    let cnt = 1;
    let currX = -1;
    let currY = 0;
    
    while (n > 0) {
        // 행 증가
        for (let i = 0; i < n; i++) {
            answer[++currX][currY] = cnt++;
        }
        
        // 열 증가
        for (let j = 0; j < n - 1; j++) {
            answer[currX][++currY] = cnt++;
        }
        
        // 행열 감소
        for (let k = 0; k < n - 2; k++) {
            answer[--currX][--currY] = cnt++;
        }
        
        n -= 3;
    }

    return answer.flat();
}