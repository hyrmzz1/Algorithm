// 슬라이딩 윈도우 - 투 포인터 ("배열에서 연속된 부분구간", "최소 구간")
function solution(gems) {
    const gemsType = new Set(gems);
    
    let left = 0, right = 0;
    let minLength = gems.length;    // 구간 길이 ([0, 0]일 때는 1)
    let answer = [1, gems.length];
    const gemsMap = new Map();  // key: 보석 종류, value: 개수
    
    // gemsType을 모두 포함하는 가장 짧은 구간 구하기
    while (right < gems.length) {
        // 오른쪽 포인터 Map에 반영
        const rigthGem = gems[right];
        gemsMap.set(rigthGem, (gemsMap.get(rigthGem) || 0) + 1);
        
        // 모든 보석 포함된 경우
        while (gemsMap.size === gemsType.size) {
            // minLength와 현재 구간 길이 비교
            if (right - left + 1 < minLength) {
                // 더 짧은 구간이면 minLength, answer 업데이트
                minLength = right - left + 1;
                answer = [left + 1, right + 1];
            }
            
            // 왼쪽 포인터 확장 및 보석 제거
            const leftGem = gems[left];
            gemsMap.set(leftGem, (gemsMap.get(leftGem) || 0) - 1);
            
            if (gemsMap.get(leftGem) === 0) {
                gemsMap.delete(leftGem);
            }
            
            left++;
        }
        
        // 오른쪽 포인터 확장
        right++;
    }
    
    return answer;
}