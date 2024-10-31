// 이분탐색 - "최대 몇 라운드"
function solution(n, k, enemy) {
    let left = 0;
    let rigth = enemy.length;
    
    while (left <= rigth) {
        let mid = Math.floor((left + rigth) / 2);
        let soldier = n;    // 병사 수
        let skill = k;  // 사용할 수 있는 무족권 개수
        
        // 0 ~ mid까지의 라운드 막을 수 있는지 확인
        const round = enemy.slice(0, mid).sort((a, b) => b - a);
        let finRound = mid; // 
        
        round.forEach((roundEnemy, idx) => {
            if (skill > 0) {
                skill--;    // 무족권 사용
            } else {
                // 무족권 다 썼다면 직접 적 막아야 함
                if (soldier >= roundEnemy) {
                    soldier -= roundEnemy;
                } else {
                    finRound = idx; // 최종 도달 라운드
                }
            }
        })
    
        if (finRound >= mid) {
            // 이 구간 모두 통과 가능
            left = mid + 1;
        } else {
            rigth = mid -1;
        }
    }
    
    return rigth;
}