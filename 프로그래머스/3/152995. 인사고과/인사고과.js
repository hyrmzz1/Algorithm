function solution(scores) {
    let wanhoRank = 1;   // 완호의 석차
    const wanho = scores[0];
    const wanhoSum = scores[0][0] + scores[0][1];
    
    // 정렬 기준 - 1) 근무 태도 내림차순, 2) 동료 평가 오름차순
    scores.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    
    let maxPeerReview = scores[0][1];
    
    for (const [workAttitude, peerReview] of scores) {
        // 인센티브 받을 수 없는 경우
        if (peerReview < maxPeerReview) {
            // 완호가 여기 포함되어 있다면
            if (workAttitude === wanho[0] && peerReview === wanho[1]) {
                return -1;
            }
            continue;
        }
        
        // 인센티브 지급, 완호보다 석차 높은 사원
        if (workAttitude + peerReview > wanhoSum) {
            wanhoRank++;
            maxPeerReview = Math.max(maxPeerReview, peerReview);
        }
    }
    
    return wanhoRank;
}