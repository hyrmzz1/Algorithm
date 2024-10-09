// 1. Map에 숫자와 해당 숫자의 개수를 넣는다
// 2. 두 Map에 공통 key 있는지 확인 -> 최소 개수만큼 배열에 넣기
// 3. 공통 key 없다면 -1 return
// 4. 배열에 0만 있다면 0 return
function solution(X, Y) {
    let pair = '';    // 짝꿍
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
            pair += key.repeat(Math.min(xValue, yValue));
        }
    }
    
    if (!pair.length) {
        return '-1';
    } else {
        const answer = pair.split('');
        
        if (answer.every(elem => elem === "0")) return "0";
        else return answer.sort((a, b) => b - a).join('');
    }
}