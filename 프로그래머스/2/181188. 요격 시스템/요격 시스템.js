function solution(targets) {
    let answer = 0;
    targets.sort((a, b) => a[1] - b[1]);
    
    let lastIdx = -1;   // 요격 미사일 위치
    targets.forEach(([s, e]) => {
        if (s >= lastIdx) {
            lastIdx = e;    // 요격 미사일 갱신
            answer++;   // 요격 미사일 개수 카운팅
        }
    })
    
    return answer;
}