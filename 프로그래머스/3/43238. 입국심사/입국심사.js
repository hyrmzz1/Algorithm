function solution(n, times) {
    let left = 0;
    let right = n * times[times.length - 1];    // 가장 오래 걸리는 심사관에게 모든 사람이 심사받는 경우 (최대값)
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        const nSum = times.reduce((acc, curr) => acc + Math.floor(mid / curr), 0);
        
        if (nSum >= n) { // mid분간 n명 이상 심사 가능
            right = mid - 1; // 시간 줄이기
        } else {    // mid분간 모두 심사 불가
            left = mid + 1;    // 시간 늘리기
        }
    }
    
    return left;
}