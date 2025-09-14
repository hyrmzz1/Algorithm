function solution(answers) {
    const scores = new Array(3).fill(0);
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < patterns.length; j++) {
            const patternLength = patterns[j].length;
            
            if (answers[i] === patterns[j][i % patternLength]) {
                scores[j]++;
            }
        }
    }
    
    const maxScore = Math.max(...scores);
    const result = [];
    
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) {
            result.push(i + 1);
        }
    }
    
    return result;
}