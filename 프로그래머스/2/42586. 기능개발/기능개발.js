function solution(progresses, speeds) {
    const days = [];
    for (let i = 0; i < progresses.length; i++) {
        days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    
    const ans = [];
    let cnt = 1;
    let maxDay = days[0]
    for (let i = 1; i < days.length; i++) {
        if (maxDay >= days[i]) {
            cnt++;
        } else {
            maxDay = days[i];
            ans.push(cnt);
            cnt = 1;
        }
    }
    ans.push(cnt)
    
    return ans;
}