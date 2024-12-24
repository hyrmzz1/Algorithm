function solution(N, stages) {
    const answer = []  // [스테이지 번호, 실패율]
    
    let user = stages.length;   // 사용자
    let stage = 1;  // 스테이지 번호
    stages.sort((a, b) => a - b);
    
    while (stage < N + 1) {
        let failUser = stages.filter((elem) => elem === stage).length;    // 해당 스테이지 클리어하지 못한 사용자 수
        answer.push([stage, failUser / user]);
        stage++;
        user -= failUser;
    }
    
    answer.sort((a, b) => b[1] - a[1]);
    return answer.map(elem => elem[0]);
}