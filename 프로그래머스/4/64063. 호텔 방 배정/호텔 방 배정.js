const findRoom = (reqRoom, rooms) => {
    // 원하는 방이 비어 있을 경우
    if (!rooms.has(reqRoom)) {
        rooms.set(reqRoom, reqRoom + 1);
        return reqRoom;
    }
    
    // 이미 배정되어 있을 경우
    const nextRoom = rooms.get(reqRoom);
    const emptyRoom = findRoom(nextRoom, rooms);
    rooms.set(reqRoom, emptyRoom + 1);
    
    return emptyRoom;
}

function solution(k, roomNumber) {
    const answer = [];
    const rooms = new Map();
    
    roomNumber.forEach(num => {
        const room = findRoom(num, rooms);
        answer.push(room);
    })
    
    return answer;
}