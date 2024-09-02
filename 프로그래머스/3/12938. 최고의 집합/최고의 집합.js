function solution(n, s) {
    // n이 1이거나 n이 s보다 크다면 집합에 0이 포함되어야 하므로 최고의 집합 존재 X
    if (s === 1 || n > s) return [-1];
    
    // 각 원소의 곱이 최대이려면 원소간 차이를 최소화해야 한다.
    const answer = new Array(n).fill(parseInt(s / n));
    let remainder = s % n;
    
    for (let i = 0; i < answer.length && remainder > 0; i++) {
        remainder--;
        answer[i] += 1;
    }
    
    return answer.sort();
}