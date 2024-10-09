function solution(X, Y) {
    let pair = [];    // 짝꿍
    const xMap = new Map();
    const yMap = new Map();
    
    for (let elem of X) {
        xMap.has(elem) ? xMap.set(elem, xMap.get(elem) + 1) : xMap.set(elem, 1);
    }
    
    for (let elem of Y) {
        yMap.has(elem) ? yMap.set(elem, yMap.get(elem) + 1) : yMap.set(elem, 1);
    }
    
    // 짝꿍 찾기
    for (let [key, xValue] of xMap) {
        if (yMap.has(key)) {
            const yValue = yMap.get(key);
            pair.push(key.repeat(Math.min(xValue, yValue)))
        }
    }
    
    if (!pair.length) {
        return '-1';
    } else {
        const answer = pair.join('').split('').sort((a, b) => b - a);
        return answer[0] === '0' ? '0' : answer.join('');
    }
}