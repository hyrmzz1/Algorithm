function solution(queue1, queue2) {
    let sum1 = queue1.reduce((acc, cur) => acc + cur);
    let sum2 = queue2.reduce((acc, cur) => acc + cur);
    
    if ((sum1 + sum2) % 2 !== 0) return -1;
    
    let cnt = 0;    // 작업 횟수
    const maxCnt = queue1.length * 3;
    let firstIdx1 = 0;
    let firstIdx2 = 0;
    const initLength = queue1.length;
    
    // 어떤 방법으로도 각 큐의 원소 합 같게 만들 수 없는 경우
    // 서로의 원소를 맞바꾼 상태가 됐을 때 (swap)
    while (sum1 !== sum2) {
        if (cnt > maxCnt) return -1;
        
        if (sum1 > sum2) {
            sum1 -= queue1[firstIdx1];  // shift
            queue2.push(queue1[firstIdx1]);  // push
            sum2 += queue1[firstIdx1++];  // shift 대신 인덱스 증가
        } else {
            sum2 -= queue2[firstIdx2];
            queue1.push(queue2[firstIdx2]);
            sum1 += queue2[firstIdx2++];
        }
        cnt++;
    }
    
    return cnt;
}