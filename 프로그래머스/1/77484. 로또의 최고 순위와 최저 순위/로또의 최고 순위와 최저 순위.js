function solution(lottos, winNums) {
    const ranks = [6, 6, 5, 4, 3, 2, 1] // idx: 순위, 값: 당첨 내용
    
    const zeroCnt = lottos.filter(lotto => lotto === 0).length;    // 0 개수
    const sameCnt = lottos.filter(lotto => winNums.includes(lotto)).length; // 일치 번호 개수
    
    // 최고 순위 -> 0 개수 + 일치 번호 개수만큼 일치, 최저 순위 -> 일치 번호 개수만큼 일치
    const maxRank = ranks[zeroCnt + sameCnt];
    const minRank = ranks[sameCnt];
    
    return [maxRank, minRank];
}