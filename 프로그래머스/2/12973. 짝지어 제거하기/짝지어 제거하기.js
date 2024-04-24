function solution(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] !== s[i]) {
            stack.push(s[i]);
        } else if (stack[stack.length - 1] === s[i]) {
            stack.pop();
        }
    }
    return stack.length === 0 ? 1 : 0;
}