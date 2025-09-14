function solution(priorities, location) {
    let answer = 0; // 순서
    const queue = priorities.map((priority, index) => ({
        priority: priority,
        originalIndex: index
    }));
    
    while (queue.length > 0) {
        const maxPriority = Math.max(...queue.map(p => p.priority));    // 실행 대기 큐에서 가장 높은 우선순위
        
        const currProcess = queue.shift();
        
        if (currProcess.priority === maxPriority) {
            answer++;
            
            if (currProcess.originalIndex === location) {
                break;
            }
        } else {
            queue.push(currProcess);
        }
    }
    
    return answer;
}