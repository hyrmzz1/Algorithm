//코딩 테스트 합격자 되기 - 자바스크립트 편
function solution(topping) {
    let cnt = 0;
    const left = new Map();
    const right = new Map();
    
    // right에 다 채우기
    topping.forEach(elem => {
        right.has(elem) ? right.set(elem, right.get(elem) + 1) : right.set(elem, 1);
    })
    
    for (let i = 0; i < topping.length - 1; i++) {
        // left에 topping[i] 넣기
        left.has(topping[i]) ? left.set(topping[i], left.get(topping[i]) + 1) : left.set(topping[i], 1);
        
        // right에서 topping[i] 빼기
        right.set(topping[i], right.get(topping[i]) - 1)
        if (right.get(topping[i]) === 0) right.delete(topping[i]);
        
        // 종류 개수 비교
        if (left.size === right.size) cnt++;
    }
    
    return cnt;
}