function solution(numbers) {
    // 코딩 테스트 합격자 되기 - 자바스크립트 편
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return number.filter(n => !numbers.includes(n)).reduce((acc, cur) => acc + cur);
}