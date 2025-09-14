function solution(priorities, location) {
    const queue = priorities.map((priority, index) => ({ priority, index}));
    let order = 0; // 순서
    
    while (queue.length > 0) {
        const currProcess = queue.shift();
        
        if (queue.some(p => p.priority > currProcess.priority)) {
            queue.push(currProcess);
        } else {
            order++;
            
            if (currProcess.index === location) {
               return order;
            }
        }
    }
}