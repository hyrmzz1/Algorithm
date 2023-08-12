function solution(n) {
    let answer;
    if (n % 7 !== 0){
        answer = Math.floor(n / 7) + 1;
    } else{
        answer = Math.floor(n / 7);
    }
    return answer;
}