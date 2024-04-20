function solution(s){
    if (s[0] === ')') return false;
    
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        s[i] === '(' ? sum += 1 : sum -= 1;
        if (sum < 0) return false;
    }
    
    return sum === 0 ? true : false;
}