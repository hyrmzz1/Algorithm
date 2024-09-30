function solution(keymap, targets) {
    const answer = [];
    
    for (const target of targets) { // "ABCD"
        let cnt = 0;
        
        for (let str of target) {   // A
            let idx = 100;  // 인덱스는 99 이하이므로 100으로 초기값 설정
            let isNotKey = false;   // 목표 문자열 작성 불가
            
            for (let key of keymap) {
                if (key.includes(str)) {
                    isNotKey = true;
                    idx = Math.min(idx, (key.indexOf(str) + 1));
                }
            }
            
            if (!isNotKey) {
                cnt = -1;
                break;
            } else {
                cnt += idx;
            }
        }
        
        answer.push(cnt);
    }
    
    return answer;
}