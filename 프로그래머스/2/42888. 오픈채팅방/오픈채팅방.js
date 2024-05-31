function solution(record) {
    const userMap = new Map();
    const message = [];
    const temp = [];
    
    record.forEach(elem => {
        const [action, uid, nickname] = elem.split(' ');
        if (action === "Enter") {
            userMap.set(uid, nickname);
            temp.push(uid + "님이 들어왔습니다.");
        } else if (action === "Leave") {
            temp.push(uid + "님이 나갔습니다.");
        } else {    // action === "Change"
            userMap.set(uid, nickname);
        }
    })
    
    temp.forEach(elem => {
        const uid = elem.slice(0, elem.indexOf('님이'));
        message.push(elem.replace(uid, userMap.get(uid)));  // uid -> nickname
    })
    
    return message;
}