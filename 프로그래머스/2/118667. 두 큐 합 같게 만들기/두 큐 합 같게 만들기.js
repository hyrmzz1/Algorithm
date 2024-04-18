function solution(queue1, queue2) {
    let sum1 = queue1.reduce((acc, cur) => acc + cur);
    let sum2 = queue2.reduce((acc, cur) => acc + cur);
    const len = queue1.length + queue2.length;
    
    let idx1 = 0, idx2 = 0;
    let cnt = 0;
    
    while (sum1 !== sum2) {
        if (sum1 < sum2) {
            sum1 += queue2[idx2];
            queue1.push(queue2[idx2]);
            sum2 -= queue2[idx2++];
        } else if (sum1 > sum2) {
            sum2 += queue1[idx1];
            queue2.push(queue1[idx1]);
            sum1 -= queue1[idx1++];
        }
        cnt++;
        
        if (idx1 >= len || idx2 >= len) return -1;
    }
    return cnt;
}