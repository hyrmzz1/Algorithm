function solution(s) {
    let answer = 0; // 올바른 문자열인지 확인 후, 맞다면 ++
    const arr = Array.from({ length: s.length }, (_, i) => s[i]);
    
    for (let i = 0; i < arr.length; i++) {    // 괄호 회전
        const stack = [];
        let flag = 1;
        
        for (let j = 0; j < arr.length; j++) {    // 올바른 괄호인지 확인
            if (arr[j] === '(' || arr[j] === '{' || arr[j] === '[') {
                stack.push(arr[j]);
            }
            else {
                const open = stack.pop();
                if (arr[j] === ')' && open === '(') continue;
                else if (arr[j] === '}' && open === '{') continue;
                else if (arr[j] === ']' && open === '[') continue;
                else {
                    flag = 0;
                    break;
                }
            }
        }
        
        if (flag && !stack.length) answer++;
        arr.push(arr.shift());
    }
    
    return answer;
}