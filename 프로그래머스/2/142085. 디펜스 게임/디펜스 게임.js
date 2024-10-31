// 이분탐색 - "최대 몇 라운드"
function solution(n, k, enemy) {
    let left = 0;
    let rigth = enemy.length;
    
    while (left <= rigth) {
        let mid = Math.floor((left + rigth) / 2);
        
        // 0 ~ mid까지의 라운드 막을 수 있는지 확인
        const round = enemy.slice(0, mid).sort((a, b) => b - a);
        
        // 0 ~ mid까지의 라운드에 모두 무족권 사용할 수 있는 경우 -> 통과
        if (mid <= k) {
            left = mid + 1;
            continue;
        }
        
        let bool = true;
        let sum = 0;
        // 무족권 스킬 없이 구간 통과 가능 여부 확인
        for (let i = k; i < round.length; i++) {
            sum += round[i];
            
            // 이 라운드 통과 못함
            if (sum > n) {
                bool = false;
                break;
            }
        }
    
        if (bool) {
            // 라운드 통과 가능
            left = mid + 1;
        } else {
            // 라운드 통과 불가
            rigth = mid -1;
        }
    }
    
    return rigth;
}