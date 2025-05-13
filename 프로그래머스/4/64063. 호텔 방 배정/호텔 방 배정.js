function solution(k, roomNumber) {
    const answer = [];
    const rooms = new Map();
    
    const findRoom = (reqRoom) => {
        // 원하는 방이 비어 있을 경우
        if (!rooms.has(reqRoom)) {
            rooms.set(reqRoom, reqRoom + 1);
            return reqRoom;
        }

        // 이미 배정되어 있을 경우
        const nextRoom = rooms.get(reqRoom);
        const emptyRoom = findRoom(nextRoom);
        rooms.set(reqRoom, emptyRoom + 1);

        return emptyRoom;
    }
    
    roomNumber.forEach(num => {
        const room = findRoom(num);
        answer.push(room);
    })
    
    return answer;
}