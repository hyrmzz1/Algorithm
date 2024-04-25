function solution(prices) {
    let answer = new Array(prices.length).fill(0);
    let cnt = 0;
    
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] <= prices[j]) cnt++;
            else {
                cnt++;
                break;
            }
        }
        
        answer[i] = cnt;
        cnt = 0;
    }
    
    return answer;
}