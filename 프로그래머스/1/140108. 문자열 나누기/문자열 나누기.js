function solution(s) {
    s = [...s];
    let answer = 0;
    
    let x = s.shift();
    let xCnt = 1;
    let notXCnt = 0;
    let bool = false;   // x 변경 여부 기록
    
    while (s.length) {
        let str = s.shift();
        if (bool) x = str;
        
        str === x ? xCnt++ : notXCnt++;
        
        if (xCnt === notXCnt) {
            answer++;
            bool = true;
        } else {
            bool = false;
        }
    }
    
    return xCnt === notXCnt ? answer : ++answer;
}