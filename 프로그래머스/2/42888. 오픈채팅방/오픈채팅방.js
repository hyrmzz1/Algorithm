function solution(record) {
    const records = new Array(record.length);
    record.forEach((elem, idx) => {
        records[idx] = elem.split(' ');
    })
    
    const obj = new Object();
    const message = [];
    const temp = [];
    
    records.forEach(elem => {
        if (elem[0] === "Enter") {
            obj[elem[1]] = elem[2];
            temp.push(elem[1] + "님이 들어왔습니다.");
        } else if (elem[0] === "Leave") {
            temp.push(elem[1] + "님이 나갔습니다.");
        } else {    // Change
            obj[elem[1]] = elem[2];
        }
    })
    
    temp.forEach(elem => {
        const uid = elem.slice(0, elem.indexOf('님이'));
        const str = elem.replace(uid, obj[uid]);  // uid -> nickname
        message.push(str);
    })
    
    return message;
}