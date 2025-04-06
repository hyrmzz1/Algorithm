function toMinute(HHMM) {
    return Math.floor(HHMM / 100) * 60 + HHMM % 100;
}

function solution(schedules, timelogs, startday) {
    let answer = 0; // 상품을 받을 직원의 수
    const satIdx = (6 - startday + 7) % 7;
    const sunIdx = (7 - startday + 7) % 7;
    
    for (let i = 0; i < timelogs.length; i++) {
        let isLate = false;   // 지각 여부
        const scheduleTime = toMinute(schedules[i]);
        
        for (let j = 0; j < 7; j++) {
            if (j === satIdx || j === sunIdx) continue; // 주말
            
            const loggedTime = toMinute(timelogs[i][j]);
            
            if (loggedTime - scheduleTime > 10) {
                isLate = true;
                break;
            }
        }
        
        if (!isLate) answer++;
    }
    
    return answer;
}