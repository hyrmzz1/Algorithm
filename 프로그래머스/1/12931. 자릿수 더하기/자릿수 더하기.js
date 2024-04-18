function solution(n) {
    const answer = n.toString().split('').map(elem => Number(elem)).reduce((acc, cur) => acc + cur);
    return answer;
}