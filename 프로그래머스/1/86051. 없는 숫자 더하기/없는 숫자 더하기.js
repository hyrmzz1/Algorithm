function solution(numbers) {
    // 코딩 테스트 합격자 되기 - 자바스크립트 편
    let answer = 0;
    
    for (let i = 0; i < 10; i++) {
        if (!numbers.includes(i)) answer += i;
    }
    
    return answer;
}