function solution(k, tangerine) {
    //코딩 테스트 합격자 되기 - 자바스크립트 편
    const map = new Map();
    
    tangerine.forEach(t => {
        map.has(t) ? map.set(t, map.get(t) + 1) : map.set(t, 1);
    })
    
    const mapSort = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    
    let type = 0;
    for (let value of mapSort.values()) {
        type++;
        k -= value;
        if (k <= 0) break;
    }
    
    return type;
}