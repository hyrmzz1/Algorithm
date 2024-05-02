function solution(n,a,b){
    let answer = 1;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    
    while (a !== b) {
        answer++;
        
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
    }
    
    return answer;
}