function solution(numbers) {
    let answer = [];
    for(let i = 0; i <= numbers.length - 1; i++){
        answer[i] = numbers[i] * 2;
    }
    return answer;
}