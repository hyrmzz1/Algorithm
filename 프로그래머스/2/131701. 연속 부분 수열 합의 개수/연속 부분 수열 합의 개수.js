function solution(elements) {
    const answer = new Set();
    const len = elements.length;
    elements = elements.concat(...elements)
    
    // 연속 부분 수열 길이
    for (let i = 1; i <= len; i++) {
        for (let j = 0; j < len; j++){
            answer.add(elements.slice(j, j + i).reduce((a, b) => a + b))
        }
    }
    
    return answer.size;
}