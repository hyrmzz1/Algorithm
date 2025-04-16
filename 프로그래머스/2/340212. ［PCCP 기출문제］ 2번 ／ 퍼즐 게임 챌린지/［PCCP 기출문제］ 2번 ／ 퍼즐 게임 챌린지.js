// Binary search
// mid(숙련도)로 limit 내에 퍼즐을 풀 수 있다 → max = mid - 1
// mid로 limit 내에 퍼즐을 풀 수 없다 → min = mid + 1

// 소요 시간 = (diff - level) × (time_cur + time_prev) + time_cur
function solution(diffs, times, limit) {
    let minLimit = 1;
    // let maxLimit = Math.max(...diffs);
    let maxLimit = diffs.reduce((acc, cur) => Math.max(acc, cur), 0);
    let answer = minLimit;
    
    while (minLimit <= maxLimit) {
        const midLimit = Math.floor((minLimit + maxLimit) / 2);
        let totalTime = 0;    // 전체 소요 시간
        
        for (let i = 0; i < diffs.length; i++) {
            if (diffs[i] <= midLimit) {
                totalTime += times[i];
            } else {
                let timeCur = times[i];
                let timePrev = i === 0 ? 0 : times[i - 1];
                
                totalTime += (timeCur + timePrev) * (diffs[i] - midLimit) + timeCur;
            }
        }
        
        if (totalTime <= limit) {
            answer = midLimit;
            maxLimit = midLimit - 1;
        } else {
            minLimit = midLimit + 1;
        }
    }
    
    return answer;
}