function solution(answers) {
    const score = new Map();   // 수포자별 점수
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === patterns[0][i % 5]) {
            score.set(0, (score.get(0) ?? 0) + 1)
        }
        
        if (answers[i] === patterns[1][i % 8]) {
            score.set(1, (score.get(1) ?? 0) + 1)
        }
        
        if (answers[i] === patterns[2][i % 10]) {
            score.set(2, (score.get(2) ?? 0) + 1)
        }
    }
    
    const maxScore = Math.max(...score.values())
    return Array.from(score.entries()).filter(elem => elem[1] === maxScore).map(elem => elem[0] + 1).sort((a, b) => a - b);
}