function solution(gems) {
    let answer = [1, gems.length];
    const type = new Set(gems).size;
    const gemsMap = new Map();
    
    let left = 0, right = 0;    // 투포인터 (인덱스)
    gemsMap.set(gems[0], 1);
    
    while (right < gems.length) {
        if (gemsMap.size === type) {    // map에 모든 gem 종류 있다면
            if (answer[1] - answer[0] > right - left) answer = [left + 1, right + 1];   // 가장 짧은 구간 갱신
            
            // 더 짧은 구간 찾기
            gemsMap.set(gems[left], gemsMap.get(gems[left]) - 1);
            if (gemsMap.get(gems[left]) === 0) gemsMap.delete(gems[left]);
            left++;
        } 
        else {    // map에 gem 종류 부족하다면
            right++;
            gemsMap.set(gems[right], gemsMap.get(gems[right]) ? gemsMap.get(gems[right]) + 1 : 1);
        }
    }
    
    return answer;
}