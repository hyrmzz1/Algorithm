const supoja = {
    1: { pattern: [1, 2, 3, 4, 5], score: 0 },
    2: { pattern: [2, 1, 2, 3, 2, 4, 2, 5], score: 0 },
    3: { pattern: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], score: 0 },
}

function solution(answers) {
    for (let [key, value] of Object.entries(supoja)) {
        const pattern = value.pattern;
        
        for (let i = 0; i < answers.length; i++) {
            if (answers[i] === pattern[i % pattern.length]) {
                value.score++;
            }
        }
    }
    
    const maxScore = Math.max(...Object.values(supoja).map((obj) => obj.score));
    const result = Object.entries(supoja)
                        .filter(([key, value]) => value.score === maxScore)
                        .map(([key, value]) => Number(key));
    
    return result;
}