function solution(n, t, m, p) {
    let seq = '';
    let answer = '';    // 튜브가 말해야 하는 숫자
    
    for (let i = 0; i < t * m; i++) {
        seq += i.toString(n).toUpperCase();
    }
    
    for (let j = p - 1; j < seq.length; j += m) {
        answer += seq[j];
        if (answer.length === t) break;
    }
    
    return answer;
}