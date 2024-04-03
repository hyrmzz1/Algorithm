function solution(clothes) {
    const hashMap = new Map();
    
    // 의상 종류별 개수
    clothes.forEach(cloth => {
        const key = cloth[1];
        const value = 1;
        
        if (hashMap.has(key)) {
            hashMap.set(key, hashMap.get(key) + 1)
        } else {
            hashMap.set(key, value);
        }
    })
    
    // 경우의 수 계산
    const cnt = [...hashMap.values()];
    let answer = 1;
    cnt.forEach(i => { answer *= i + 1 })
    
    return answer - 1;  // 0개 착용한 경우 제외
}