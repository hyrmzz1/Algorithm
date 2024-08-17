// 1. 길이가 number인 배열에 각 기사 번호의 약수 개수 저장
// 2. 만약 배열에 limit보다 큰 요소 있다면 power로 대체
// 3. 배열 요소 합 반환

function solution(number, limit, power) {
    const answer = new Array(number + 1).fill(0);
    
    // answer[i]에 i의 약수 개수 저장
    for(let i = 1; i <= number; i++) {
        // 약수 개수 구하기
        let cnt = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (j === Math.sqrt(i)) {
                cnt++;
            } else if (i % j === 0) {
                cnt += 2;
            }
        }
        
        answer[i] = cnt > limit ? power : cnt;
    }
    
    return answer.reduce((acc, curr) => acc + curr);
}