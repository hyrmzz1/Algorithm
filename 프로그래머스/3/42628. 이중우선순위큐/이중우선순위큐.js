function solution(operations) {
    const queue = [];
    
    while (operations.length > 0) {
        const [command, h] = operations.shift().split(" ");
        
        if (command === "I") {
            queue.push(Number(h));
            queue.sort((a, b) => b - a);
        }
        else {  // command === "D"
            if (h === "1") queue.shift();
            else queue.pop();   // h === "-1"
        }
    }
    
    return queue.length > 0 ? [Math.max(...queue), Math.min(...queue)] : [0, 0]
}