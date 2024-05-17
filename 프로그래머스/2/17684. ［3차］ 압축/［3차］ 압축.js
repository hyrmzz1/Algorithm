function solution(msg) {
    const answer = [];
    const dict = new Map(); // 키: 글자, 값: 인덱스
    let idx = 27;   // 사전 추가 인덱스
    let temp = 0;
    
    for (let i = 0; i < msg.length; i++) {
        let w = msg[i];
        let c = msg[i + 1];
        
        if (!dict.get(w + c)) {
            answer.push(w.charCodeAt() - 64);
            dict.set(w + c, idx++);
        } else {
           while(dict.get(w + c)){
               temp = w + c;
               w = w + c;
               c = msg[++i + 1];
           }
           dict.set(w + c,idx++);
           answer.push(dict.get(temp));
        }   
    }
    
    return answer;
}