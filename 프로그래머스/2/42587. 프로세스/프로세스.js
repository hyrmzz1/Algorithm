function solution(priorities, location) {
    let dict = priorities.map((priority, idx) => [priority, idx])   // 실행 대기
    let answer = 0;
    
    while (dict.length) {
        let maxProcess = Math.max.apply(null, dict.map(x => x[0]));
        let [currProcess, currIdx] = dict.shift();
        
        if (currProcess < maxProcess) {
            dict.push([currProcess, currIdx]);
        } else {
            answer++;   // 실행 순서
            if (currIdx === location) return answer;
        }
    }
}