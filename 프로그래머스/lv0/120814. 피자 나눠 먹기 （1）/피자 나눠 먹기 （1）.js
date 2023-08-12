function solution(n) {
    // answer 선언하지 않고 if - else 문 안에서 return
    if (n % 7 !== 0){
        return Math.floor(n / 7) + 1;
    } else{
        return Math.floor(n / 7);
    }
}