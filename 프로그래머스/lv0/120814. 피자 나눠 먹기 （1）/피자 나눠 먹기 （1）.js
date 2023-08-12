function solution(n) { 
    // 나머지 있는 경우(n/7 정수 아닌 경우)에 1 큰 수 반환 => Math.ceil 사용
    return Math.ceil(n / 7);
}