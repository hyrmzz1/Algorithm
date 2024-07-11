const getCombination = (str, len, map) => {
    const combine = (prefix, start) => {
        if (prefix.length === len) {
            prefix = [...prefix].sort().join('');   // 오름차순 정렬
            map.has(prefix) ? map.set(prefix, map.get(prefix) + 1) : map.set(prefix, 1);
            return;
        }
    
        for (let i = start; i < str.length; i++) {
            combine(prefix + str[i], i + 1);
        }
    }

    combine('', 0);
}

function solution(orders, course) {
    const answer = [];
    
    course.forEach(cnt => {
        // 1. cnt별 조합 구하기
        const menu = new Map();   // key: 조합, value: 주문 횟수
        
        orders.forEach(order => {
            getCombination(order, cnt, menu);
            
        })
        
        // 2. cnt별 가장 많이 주문된 조합 구하기
        const maxCnt = Math.max(...new Set([...menu.values()]));
        menu.forEach((value, key) => {
            if (value == maxCnt && maxCnt !== 1) {
                answer.push(key);}
        })
    })
    
    return answer.sort();
}