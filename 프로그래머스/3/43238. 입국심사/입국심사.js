// 이분 탐색 판단 근거
// 1. 입력의 최대값이 10억 - O(n) 순회로는 시간 초과
// 2. 최대/최소값을 구하는 문제
// 3. 결정 문제로 변환 가능 ("모든 사람이 심사받는 최소 시간?" →"시간 T 내에 모든 사람이 심사받을 수 있는가?")
// 4. 단조성: 시간 T에서 불가능하면 → T보다 작은 시간에서도 불가능 / 시간 T에서 가능하면 → T보다 큰 시간에서도 가능
// 5. 직접 시뮬레이션 돌리기는 복잡하지만 검증하기에는 용이

function solution(n, times) {
    let left = 1;
    let right = n * Math.max(...times) + 1;
    
    const canReviewAll = (limit) => {
        let totalReviewee = 0;  // 심사받은 사람 수
        
        for (const time of times) {
            totalReviewee += Math.floor(limit / time);
            
            if (totalReviewee >= n) return true;
        }
        
        return false;
    }
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        
        if (canReviewAll(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return right;
}