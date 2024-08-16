// 두 수의 최대공약수 구하기
function GCD(num1, num2) {
    if (num2 === 0) return num1;

    return GCD(num2, num1 % num2);
}

function LCM(num1, num2) {
  return (num1 * num2) / GCD(num1, num2);
}

function solution(arr) {
    arr.sort((a, b) => b - a);
    let answer = arr[0];
    
    // 최소 공배수 구하기
    for (let i = 1; i < arr.length; i++) {
        answer = LCM(answer, arr[i]);
    }
    
    return answer;
}

/*
// 오답

// 1. 최대 공약수 x 구하기 (최솟값은 1)
// 2. arr의 모든 요소를 각각 최대 공약수로 나눈 몫과 최대 공약수를 곱하기

// 1. x는 배열에서 가장 작은 수
// 2. 만약 x로 배열의 모든 수가 나누어 떨어진다면 x가 최대 공약수
// 2-1. 배열 요소를 x로 나눈 모든 몫과 x를 곱한 수가 답
// 3. 배열 중 하나라도 x로 나누어 떨어지지 않는다면 x--;

// 틀린 이유: 최소공배수는 두 수씩 차례대로 구해야 하며, GCD를 이용해 각 단계에서 최소공배수를 업데이트해야 한다.

function solution(arr) {
    arr.sort((a, b) => a - b);
    let x = arr[0];
    
    while (x > 0) {
        const answer = new Array(arr.length).fill(-1);
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % x !== 0) break;
            
            answer[i] = parseInt(arr[i] / x);
        }
        
        if (!answer.includes(-1)) {
            return answer.reduce((a, b) => a * b, x)
        };
        
        x--;
    }
}
*/