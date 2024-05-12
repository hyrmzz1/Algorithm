function solution(n, left, right) {
    const answer = [];
    
    for (let i = left; i <= right; i++) {
        let row = parseInt(i / n);
        let col = i % n;
        
        row > col ? answer.push(row + 1) : answer.push(col + 1);
    }
    
    return answer;
}