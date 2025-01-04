function solution(msg) {
    const answer = [];
    const dict = new Map(Array.from({ length: 26 }, (_, i) => [String.fromCharCode(i + 65), i + 1]));
    
    for (let i = 0; i < msg.length; i++) {
        let w = msg[i];
        let c = msg[i + 1];
        
        while (dict.get(w + c)) {
            w = w + c;
            c = msg[++i + 1];
        }
        
        answer.push(dict.get(w));
        dict.set(w + c, dict.size + 1);
    }
    
    return answer;
}