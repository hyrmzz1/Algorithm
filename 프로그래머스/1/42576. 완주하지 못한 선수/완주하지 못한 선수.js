function solution(participant, completion) {    // (참가자 이름, 완주선수 이름)
    let answer = '';
    const hashMap = new Map();
    
    participant.forEach((name) => {
        if (!hashMap.has(name)) {   // 동명이인 없으면
            hashMap.set(name, 1);
        } else {    // 동명이인 있으면
            hashMap.set(name, hashMap.get(name) + 1);
        }
    })
    
    completion.forEach((name) => {
        if (hashMap.get(name) === 1) {  // 동명이인 없으면
            hashMap.delete(name);   // 삭제
        }
        else{   // 동명이인 있으면
            hashMap.set(name, hashMap.get(name) - 1);   // 동명이인 수 - 1
        }
    })
    
    return [...hashMap.entries()][0][0];
}