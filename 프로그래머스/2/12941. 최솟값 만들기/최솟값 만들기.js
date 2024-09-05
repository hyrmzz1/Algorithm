function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    let answer = 0;
    for (let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }
    
    return answer;
}