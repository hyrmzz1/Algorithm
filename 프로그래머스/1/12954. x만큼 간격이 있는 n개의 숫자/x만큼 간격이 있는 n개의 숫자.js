function solution(x, n) {
    let answer = new Array();

    for (let i = 1; i <= n; i++) {
        answer.push(x * i);
    }

    return answer;
}