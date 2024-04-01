function solution(participant, completion) {
    const hashMap = new Map();
    
    participant.forEach((name) => {
        !hashMap.has(name) ? hashMap.set(name, 1) : hashMap.set(name, hashMap.get(name) + 1);
    })
    
    completion.forEach((name) => {
        hashMap.get(name) === 1 ? hashMap.delete(name) : hashMap.set(name, hashMap.get(name) - 1);
    })
    
    return [...hashMap.entries()][0][0];
}