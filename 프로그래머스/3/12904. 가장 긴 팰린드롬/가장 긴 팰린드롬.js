function solution(s) {
    let answer = 1;
    const dp = Array.from({length: s.length}).map(_ => new Array(s.length).fill(false));    // dp[i][j]에 s[i]부터 s[j]까지의 문자열이 팰린드롬인지 기록
    
    // 1개씩 탐색
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;    // 자기 자신은 팰린드롬
        // answer = 1;
    }
    
    // 2개씩 탐색
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            answer = 2;
        }
    }
    
    // 3개 이상씩 탐색
    for (let i = 3; i <= s.length; i++) {
        for (let start = 0; start <= s.length - i; start++) {
            const end = start + i - 1;
            
            if (s[start] === s[end] && dp[start + 1][end - 1]) {
                dp[start][end] = true;
                answer = Math.max(answer, i);
            }
        }
    }
    
    return answer;
}

/*
// 정확성 검사는 다 통과하나, 시간초과로 인해 효율성 검사는 통과하지 못한다.
function solution(s) {
    if (s.length === 1) return 1;
    
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - 1; j >= i; j--) {
            let str = s.slice(i, j + 1)
            let reversedStr = str.split('')
            .reverse()
            .join('');
            
            if (str === reversedStr) answer = Math.max(answer, str.length);
        }
    }

    return answer;
}
*/