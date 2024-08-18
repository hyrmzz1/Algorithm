function solution(k, m, score) {
    const box = parseInt(score.length / m); // 판매할 박스 수
    const remainder = score.length % m; // 고려 X

    // 포장하지 않는 사과 -> 점수 낮은 품목
    score.sort((a, b) => a - b);
    score = score.slice(remainder);
    
    // 최대 이익 얻도록 박스 구성
    let minAppleScore = 0;  // 최저 사과 점수의 합
    for (let i = 0; i < score.length; i += m) {
        minAppleScore += score[i];
    }
    
    return minAppleScore * m;
}