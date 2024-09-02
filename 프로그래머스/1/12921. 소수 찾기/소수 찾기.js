// 특정 범위 안에 존재하는 모든 소수 찾을 때는 '에라토스테네스의 체' 이용
function solution(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i] === true) {
            for (let j = i + i; j < isPrime.length; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    return isPrime.filter(num => num === true).length;
}