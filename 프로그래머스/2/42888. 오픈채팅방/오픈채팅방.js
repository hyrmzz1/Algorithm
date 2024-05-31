function solution(record) {
    const userMap = new Map();
    const message = [];
    
    record.forEach(elem => {
        const [action, uid, nickname] = elem.split(' ');
        if (action === "Enter" || action === "Change") {
            userMap.set(uid, nickname);
        }
    })
    
    record.forEach(elem => {
        const [action, uid, nickname] = elem.split(' ');
        
        if (action === "Enter") message.push(userMap.get(uid) + '님이 들어왔습니다.');
        else if (action === "Leave") message.push(userMap.get(uid) + '님이 나갔습니다.');
    })
    
    return message;
}