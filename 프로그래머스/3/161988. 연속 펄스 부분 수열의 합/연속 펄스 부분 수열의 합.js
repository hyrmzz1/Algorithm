// DP, 누적합
function solution(sequence) {
    if (sequence.length === 1) return Math.abs(sequence[0]);
    
    // [1, -1, ...]을 곱한 배열과 [-1, 1, ...]을 곱한 배열을 만든다.
    const seq1 = sequence.map((elem, idx) => (idx % 2 === 0) ? elem : elem * -1);   // 1로 시작
    const seq2 = sequence.map((elem, idx) => (idx % 2 !== 0) ? elem : elem * -1);   // -1로 시작
    
    // 최대값 기록용
    let maxSeq1 = -Infinity;  // 1로 시작
    let maxSeq2 = -Infinity;  // -1로 시작
    
    // dp[i - 1]과 같은 역할 (이전 값 저장용)
    let prevSeq1 = seq1[0];  // 1로 시작
    let prevSeq2 = seq2[0];  // -1로 시작
    
    // 누적합 기록
    for (let i = 1; i < sequence.length; i++) {
        // 이전 요소에서 누적하는게 나은지, 새로 누적을 시작하는게 나은지
        prevSeq1 = Math.max(prevSeq1 + seq1[i], seq1[i]);
        prevSeq2 = Math.max(prevSeq2 + seq2[i], seq2[i]);
        
        maxSeq1 = Math.max(prevSeq1, maxSeq1);
        maxSeq2 = Math.max(prevSeq2, maxSeq2);
    }
    
    return Math.max(maxSeq1, maxSeq2);
}

/* 런타임 에러 발생
function solution(sequence) {
    // [1, -1, ...]을 곱한 배열과 [-1, 1, ...]을 곱한 배열을 만든다.
    const seq1 = sequence.map((elem, idx) => (idx % 2 === 0) ? elem : elem * -1);   // 1로 시작
    const seq2 = sequence.map((elem, idx) => (idx % 2 !== 0) ? elem : elem * -1);   // -1로 시작
    
    // 누적합을 기록할 배열 선언
    const dp1 = new Array(sequence.length); // 1로 시작
    dp1[0] = seq1[0];
    
    const dp2 = new Array(sequence.length); // -1로 시작
    dp2[0] = seq2[0];
    
    // 누적합 기록
    for (let i = 1; i < sequence.length; i++) {
        // 이전 요소에서 누적하는게 나은지, 새로 누적을 시작하는게 나은지
        dp1[i] = Math.max(dp1[i - 1] + seq1[i], seq1[i]);
        dp2[i] = Math.max(dp2[i - 1] + seq2[i], seq2[i]);
    }
    
    // dp1, dp2 배열 내의 최대값 반환
    return Math.max(...dp1, ...dp2);
}
*/