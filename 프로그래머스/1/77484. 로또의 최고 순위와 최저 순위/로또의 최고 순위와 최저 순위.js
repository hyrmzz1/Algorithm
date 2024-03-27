function solution(lottos, win_nums) {
    let maxRank = 0, minRank = 0, cnt = 0, zero = 0;
    let rank = [6, 6, 5, 4, 3, 2, 1]    // 등수: rank[cnt]
    
    for (let i  = 0; i < lottos.length; i++){
        if (win_nums.includes(lottos[i])) cnt++;
        if (lottos[i] === 0) zero++;
    }
    
    minRank = rank[cnt]
    maxRank = rank[cnt + zero]
    
    return [maxRank, minRank];
}