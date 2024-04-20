function solution(progresses, speeds) {
    const days = [];
    progresses.map((progress, idx) => {
        days.push(Math.ceil((100 - progress) / speeds[idx]));
    })
    
    const ans = [];
    let cnt = 1;
    let maxDay = days[0];
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