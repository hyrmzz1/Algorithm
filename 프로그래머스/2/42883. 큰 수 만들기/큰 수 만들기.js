function solution(number, k) {
    const len = number.length - k;
    const maxNum = [];
    
    for (let i = 0; i < number.length; i++) {
        while (number[i] > maxNum[maxNum.length - 1] && k > 0) {
            maxNum.pop();
            k--;
        }
        
        maxNum.push(number[i]);
    }
    
    return maxNum.slice(0, len).join('');
}