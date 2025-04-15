function solution(queue1, queue2) {
    let cnt = 0;
    
    const len = queue1.length;
    let sum1 = queue1.reduce((acc, cur) => acc + cur);
    let sum2 = queue2.reduce((acc, cur) => acc + cur);
    
    if ((sum1 + sum2) % 2) return -1;
    
    let pointer1 = 0;
    let pointer2 = 0;
    
    while (sum1 !== sum2) {
        if (pointer1 >= len && pointer2 >= len) return -1;  // 두 큐가 스왑상태일 때
        
        if (sum1 > sum2) {
            queue2.push(queue1[pointer1]);
            
            sum1 -= queue1[pointer1];
            sum2 += queue1[pointer1];
            
            pointer1++;
        } else {
            queue1.push(queue2[pointer2]);
            
            sum1 += queue2[pointer2];
            sum2 -= queue2[pointer2];
            
            pointer2++;
        }
        
        cnt++;
    }
    
    return cnt;
}