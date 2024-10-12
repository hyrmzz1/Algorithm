function solution(want, number, discount) {
    let answer = 0;
    const discountMap = new Map();
    const wantMap = new Map();
    want.forEach((elem, idx) => {
        wantMap.set(elem, number[idx]);
    })
    
    // 초기 슬라이딩 윈도우
    for (let i = 0; i < 10; i++) {
        // discountMap.has(discount[i]) ? discountMap.set(discount[i], discountMap.get(discount[i]) + 1) : discountMap.set(discount[i], 1);
        discountMap.set(discount[i], (discountMap.get(discount[i]) || 0) + 1);
    }
    
    // discountMap이 wantMap에 있는 요소를 가지고 있는지 판별
    const isMatching = (map1, map2) => {
        for (let [key, value] of map2) {
            // 원하는 개수보다 할인 중인 개수가 적을 때 (또는 해당 요소가 없을 때)
            if ((map1.get(key) || 0) < value) return false;
        }
        return true;
    }
    
    if (isMatching(discountMap, wantMap)) answer++;
    
    // 슬라이딩 윈도우
    for (let i = 10; i < discount.length; i++) {
        // 맨 앞 요소 빼기
        discountMap.set(discount[i - 10], discountMap.get(discount[i - 10]) - 1);
        // i번째 요소 더하기
        discountMap.set(discount[i], (discountMap.get(discount[i]) || 0) + 1);
        
        // isMatching 함수 돌리기
        if (isMatching(discountMap, wantMap)) answer++;
    }
    
    return answer;
}