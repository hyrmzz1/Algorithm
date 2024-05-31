function solution(record) {
    const obj = new Object();
    const message = [];
    const temp = [];
    
    record.forEach(elem => {
        const [action, uid, nickname] = elem.split(' ');
        if (action === "Enter") {
            obj[uid] = nickname;
            temp.push(uid + "님이 들어왔습니다.");
        } else if (action === "Leave") {
            temp.push(uid + "님이 나갔습니다.");
        } else {    // action === "Change"
            obj[uid] = nickname;
        }
    })
    
    temp.forEach(elem => {
        const uid = elem.slice(0, elem.indexOf('님이'));
        const str = elem.replace(uid, obj[uid]);  // uid -> nickname
        message.push(str);
    })
    
    return message;
}