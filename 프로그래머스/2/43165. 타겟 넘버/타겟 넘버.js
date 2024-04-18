function solution(numbers, target) {
    let answer = 0;
    
    function dfs(idx, sum) {
        if (idx === numbers.length) {
            if (sum === target) answer++;
            return;
        }
        
        dfs(idx + 1, sum + numbers[idx]);   // 첫번째 파라미터로 ++idx 넣으면 안됨
        dfs(idx + 1, sum - numbers[idx]);
    }
    
    dfs(0, 0);
    return answer;
}