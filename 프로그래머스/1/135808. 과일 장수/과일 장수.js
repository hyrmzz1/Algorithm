function solution(k, m, score) {
    // 포장하지 않는 사과 -> 점수 낮은 품목
    score = score.sort((a, b) => a - b).slice(score.length % m);
    
    // 최대 이익 얻도록 박스 구성
    // 박스 개수만큼 반복
    let answer = 0;
    for (let i = 0; i < score.length; i += m) {
        answer += score[i] * m;
    }
    
    return answer;
}