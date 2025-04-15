function solution(gems) {
    let answer = [0, gems.length - 1];
    const type = new Set(gems).size;
    
    let left = 0;
    let right = 0;
    const gemsMap = new Map();
    gemsMap.set(gems[0], 1);
    
    while (right < gems.length) {
        if (gemsMap.size === type) {
            // 최단 구간 갱신
            if (right - left < answer[1] - answer[0] || 
               (right - left === answer[1] - answer[0]) && left < answer[0]) {
                answer = [left, right];
            }
            
            gemsMap.set(gems[left], gemsMap.get(gems[left]) - 1);
            if (gemsMap.get(gems[left]) === 0) gemsMap.delete(gems[left]);
            
            left++;
        } else {
            right++;
            gemsMap.set(gems[right] , gemsMap.has(gems[right]) ? gemsMap.get(gems[right]) + 1 : 1);
        }
    }
    
    return [++answer[0], ++answer[1]];
}