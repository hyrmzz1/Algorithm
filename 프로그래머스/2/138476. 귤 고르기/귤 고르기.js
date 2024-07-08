function solution(k, tangerine) {
    //코딩 테스트 합격자 되기 - 자바스크립트 편
    const map = new Map();
    
    tangerine.forEach(t => {
        map.has(t) ? map.set(t, map.get(t) + 1) : map.set(t, 1);
    })
    
    const mapSort = [...map.entries()].sort((a, b) => a[1] - b[1]);
    
    let type = 0;
    while(k > 0) {
        type++;
        const [key, value] = mapSort.pop();
        k -= value;
    }
    
    return type;
}