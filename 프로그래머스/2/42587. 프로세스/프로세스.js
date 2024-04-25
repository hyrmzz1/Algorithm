function solution(priorities, location) {
    let dict = priorities.map((priority, idx) => [priority, idx])   // 실행 대기
    let maxProcess = Math.max(...dict.map(x => x[0]));
    const runIdx = [];
    
    while (dict.length) {
        let [currProcess, currIdx] = dict.shift();
        
        if (currProcess < maxProcess) {
            dict.push([currProcess, currIdx]);
        } else {
            runIdx.push(currIdx);
            if (currIdx === location) return runIdx.length;
            maxProcess = Math.max(...dict.map(x => x[0]));  // 최대값 갱신
        }
    }
}