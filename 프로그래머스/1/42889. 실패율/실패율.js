function solution(N, stages) {
    const answer = []  // [스테이지 번호, 실패율]
    
    for (let i = 1; i <= N; i++) {
        let notClear = stages.filter(elem => elem === i).length;    // 도달, 클리어 X
        let reach = stages.filter(elem => elem >= i).length;    // 도달
        answer.push([i, notClear / reach]);
    }
    
    answer.sort((a, b) => b[1] - a[1]);
    return answer.map(elem => elem[0]);
}