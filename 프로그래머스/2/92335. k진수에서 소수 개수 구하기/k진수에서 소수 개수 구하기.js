const isPrime = (num) => {
    if (num < 2 || !num) return false;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}

function solution(n, k) {
    const numbers = n.toString(k).split("0").map(Number);
    
    let cnt = 0;    // 소수 개수
    numbers.forEach(number => {
        if (isPrime(number)) cnt++;
    })
    
    return cnt;
}