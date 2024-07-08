function solution(A, B) {
    // 코딩 테스트 합격자 되기 - 자바스크립트 편
    let score = 0;  // B팀 승점
    A.sort((a, b) => b - a);
    B.sort((a, b) => a - b);
    
    A.forEach(a => {
        const Bmax = B[B.length - 1];
        if (a < Bmax) {
            score++;
            B.pop();
        }
    })
    
    return score;
}