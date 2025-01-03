function solution(record) {
    const answer = [];
    const nicknameMap = new Map();
    const actionMap = new Map([
        ["Enter", "님이 들어왔습니다."],
        ["Leave", "님이 나갔습니다."],
    ])
    
    record.forEach(elem => {
        const [action, uid, nickname] = elem.split(' ');
        if (action === "Enter" || action === "Change") {
            nicknameMap.set(uid, nickname);
        }
    })
    
    record.forEach(elem => {
        const [action, uid, nickname] = elem.split(' ');
        
        if (action !== "Change") {
            answer.push(nicknameMap.get(uid) + actionMap.get(action));
        }
    })
    
    return answer;
}