function solution(numbers) {
    const answer = [];
    
    numbers.forEach(num => {
        if (num % 2) {  // 가장 뒤의 01 -> 10 으로 변환
            num = 0 + num.toString(2);
            let idx = num.lastIndexOf('01');
            num = num.substring(0, idx) + '10' + num.substring(idx + 2);
            answer.push(parseInt(num, 2));
        } else {
            answer.push(num + 1);
        }
    })
    
    return answer;
}