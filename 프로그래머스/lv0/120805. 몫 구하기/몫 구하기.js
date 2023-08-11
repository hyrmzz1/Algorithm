function solution(num1, num2) {
    0< num1, num2 <= 100;
    const answer = Math.floor(num1 / num2);   // parseInt(num1 / num2)는 안됨. 큰 수에서는 type number에 string이 들어가는 경우도 있기 때문.
    return answer;
}