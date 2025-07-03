// 1. yellow 배치 조합 구하기 (r * c = yellow)
    // 1-1. yellow가 24일 때 배치 조합은 [[24, 1], [12, 2], [8, 3], [6, 4]]
// 2. r * 2 + c * 2 + 4 === brown 을 만족하는 r, c 구하기
function solution(brown, yellow) {
    const pairs = [];
    
    // 1. yellow 배치 조합 구하기
    for (let c = 1; c * c <= yellow; c++) {
        if (yellow % c !== 0) continue;   // 약수 아님
        
        const r = yellow / c;
        pairs.push([r, c]);
    }
    
    // 2. r * 2 + c * 2 + 4 === brown을 만족하는 격자 크기 구하기
    for (const [r, c] of pairs) {
        if (brown === r * 2 + c * 2 + 4) return [r + 2, c + 2];
    }
}