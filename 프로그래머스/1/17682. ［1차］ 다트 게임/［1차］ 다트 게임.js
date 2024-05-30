function solution(dartResult) {
    let score = [];
    let answer = 0;
    
    // 각 라운드 파싱
    let temp = '';
    for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(dartResult[i]) && isNaN(dartResult[i - 1])) {
            score.push(temp);
            temp = '';
        }
        temp += dartResult[i];
    }
    score.push(temp);   // 3라운드
    
    // 점수 계산
    for (let j = 1; j < score.length; j++) {
        let cnt = '';    // 점수
        for (let elem of score[j]) {
            console.log(elem);
            if (!isNaN(elem)) cnt += elem;  // 점수
            else {  // 보너스, 옵션
                cnt = Number(cnt);
                if (elem === "D") cnt = Math.pow(cnt, 2);
                else if (elem === "T") cnt = Math.pow(cnt, 3);
                else if (elem === "*") {
                    cnt *= 2;
                    score[j - 1] *= 2;
                }
                else if (elem === "#") cnt *= -1;
            }
        }
        score[j] = cnt;
    }
    
    answer = score[1] + score[2] + score[3];
    return answer;
}