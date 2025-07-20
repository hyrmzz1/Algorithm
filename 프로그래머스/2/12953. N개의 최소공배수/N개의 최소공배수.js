// 최소공배수: LCM, 최대공약수: GCD
// LCM(a, b) = (a × b) / GCD(a, b)
// GCD는 유클리드 호제법(GCD(a, b) = GCD(b, a % b))을 이용해 구할 수 있다.

// 최대공약수 구하기
const GCD = (a, b) => {
    // 유클리드 호제법
    while (b !== 0) {
        let temp = a;
        a = b;
        b = temp % b;
    }
    
    return a;
}

// 최소공배수 구하기
const LCM = (a, b) => {
    return (a * b) / GCD(a, b);
}

function solution(arr) {
    return arr.reduce((acc, cur) => LCM(acc, cur));
}