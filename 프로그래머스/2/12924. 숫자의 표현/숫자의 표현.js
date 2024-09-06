function solution(n) {
    let cnt = 1;    // 자기자신
    
    for (let i = 1; i < n / 2; i++) {
        let sum = i;
        
        for (let j = i + 1; j < n - i + 1; j++) {
            sum += j;
            
            if (sum >= n) {
                if(sum === n) cnt++;
                break;
            }
        }
    }
    
    return cnt;
}

/*
// 정확성 검사는 모두 통과하나, 효율성 검사는 일부 실패 (시간초과)
function solution(n) {
    let cnt = 1;    // 자기자신
    let i = Math.ceil(n / 2);
    
    while (i > 0) {
        let sum = i;
        
        for (let j = i - 1; j > 0; j--) {
            sum += j;
            
            if (sum === n) {
                cnt++;
                break;
            } else if (sum > n) {
                break;
            }
        }
        
        i--;
    }
    
    return cnt;
}
*/