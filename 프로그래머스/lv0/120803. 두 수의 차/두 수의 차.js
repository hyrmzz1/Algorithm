function solution(num1, num2) {
    // 제한 사항 반영
    num1, num2 >= -50000 && num1, num2 <= 50000;
    const answer = num1 - num2;
    return answer;
}