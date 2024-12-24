const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    n = n.toString(k);
    const numbers = n.split("0").map(Number).filter(elem => Boolean && elem > 1);
    
    let cnt = 0;    // 소수 개수
    numbers.forEach(number => {
        if (isPrime(number)) cnt++;
    })
    
    return cnt;
}