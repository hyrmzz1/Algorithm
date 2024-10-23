// 균형잡힌 괄호 분자열로 분리
const seperate = (str) => {
    let left = 0;
    let right = 0;
    
    for (let i = 0; i < str.length; i++) {
        str[i] === "(" ? left++ : right++;
        
        // 균형잡힌 괄호 문자열
        if (left === right) {
            return [str.slice(0, i + 1), str.slice(i + 1)];
        }
    }
}

// 올바른 괄호 문자열인지 확인
const correct = (str) => {
    const stack = [];
    
    for (let s of str) {
        if (s === "(") {
            stack.push(s);
        } else {
            if (stack.length === 0) return false;   // 짝 맞지 않음
            
            stack.pop();
        }
    }
    
    return true;
}

function solution(p) {
    let answer = '';
    
    // 1단계
    if (p.length === 0) return answer;
    
    // 2단계
    let [u, v] = seperate(p);
    
    if (correct(u)) {   // 3, 3-1단계
        return u + solution(v);
    } else {    // 4단계
        answer = "(" + solution(v) + ")";   // 4-1 ~ 4-3단계
        
         // 4-4단계
        for (let str of u.slice(1, u.length - 1)) {
            answer += str === "(" ? ")" : "(";
        }
    }
    
    return answer;
}