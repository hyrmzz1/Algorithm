function solution(age) {
    0 < age <= 120; // age > 0 && age <= 120; 와 같음.
    const answer = 2022 - age + 1;
    return answer;
}