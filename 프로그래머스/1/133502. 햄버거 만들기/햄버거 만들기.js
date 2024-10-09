function solution(ingredient) {
    let answer = 0;
    const stack = [];
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        // stack.slice(-4) === [1, 2, 3, 1] 와 같이 비교할 수 없다. (참조 비교이므로)
        if (stack.slice(-4).join('') === '1231') {
            stack.splice(-4);
            answer++;
        }
    }
    
    return answer;
}