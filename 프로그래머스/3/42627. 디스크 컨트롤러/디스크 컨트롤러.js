function solution(jobs) {
    const cnt = jobs.length;
    let answer = 0;
    
    jobs.sort((a, b) => a[0] - b[0]);   // 시점 기준 정렬
    const tmp = [];
    let time = 0;

    while (jobs.length > 0 || tmp.length > 0) { // 모든 작업 수행할 때까지 반복
        while (jobs.length > 0 && jobs[0][0] <= time) tmp.push(jobs.shift());
        
        if (tmp.length) {   // 해당 시점에 처리 가능한 작업 있다면
            tmp.sort((a, b) => a[1] - b[1]);    // 소요 시간 기준 정렬
            const [req, fin] = tmp.shift();
            answer += (time - req + fin);
            time += fin;
        } else {
            time++;
        }
    }
    
    return Math.floor(answer / cnt);
}