function solution(priorities, location) {
    const queue = priorities.map((priority, index) => ({ priority, index }));
    let order = 0;
    let i = 0;  // 실행 대기 큐 맨 앞 인덱스
    
    while (true) {
        const currProcess = queue[i];
        const maxPriority = Math.max(...queue.slice(i).map(p => p.priority));
        
        if (currProcess.priority < maxPriority) {
            queue.push(currProcess);
        } else {
            order++;
            
            if (currProcess.index === location) {
               break;
            }
        }
        i++;
    }

    return order;
}