function solution(s) {
    s = [...s];
    let answer = 0;
    
    let x = s[0];
    let xCnt = 0;
    let notXCnt = 0;
    let bool = false;   // x 변경 여부 기록
    
    s.forEach(elem => {
        if (bool) x = elem;
        elem === x ? xCnt++ : notXCnt++;
        
        if (xCnt === notXCnt) {
            answer++;
            bool = true;
        } else {
            bool = false;
        }
    })
    
    return xCnt === notXCnt ? answer : ++answer;
}