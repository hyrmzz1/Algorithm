function solution(dartResult) {
    const bonus = new Map();
    bonus.set("S", 1).set("D", 2).set("T", 3);
    
    const answer = [];
    const rounds = dartResult.match(/\d{1,2}[SDT][*#]?/g);
    
    rounds.forEach((round, idx) => {
        let score = round.match(/\d+/g)[0];
        let bonusIdx = score.length;
        score = Number(score);
        
        for (let i = bonusIdx; i < round.length; i++) {
            if (i === bonusIdx) {   // bonus
                score = Math.pow(score, bonus.get(round[i]))
            } else {    // option
                if (round[i] === "*") {
                    if (idx !== 0) answer[idx - 1] *= 2;
                    score *= 2;
                } else {    // round[i] === "#"
                    score *= -1;
                }
            }
        }
        
        answer.push(score);
    })
    
    return answer.reduce((acc, curr) => acc + curr);
}