function solution(priorities, location) {
    let dict = priorities.map((priority, idx) => [priority, idx])   // 실행 대기
    const runIdx = [];
    
    while (dict.length) {
        let maxProcess = Math.max(...dict.map(x => x[0]));
        let [currProcess, currIdx] = dict.shift();
        
        if (currProcess < maxProcess) {
            dict.push([currProcess, currIdx]);
        } else {
            runIdx.push(currIdx);
            if (currIdx === location) return runIdx.length;
        }
    }
}