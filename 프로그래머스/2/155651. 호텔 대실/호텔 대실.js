const toMinutes = (str) => {
    const [hour, minute] = str.split(':');
    return Number(hour) * 60 + Number(minute);
}

function solution(bookTime) {
    const room = [];    // 필요한 방
    
    bookTime.sort().forEach(([start, end]) => {
        const startTime = toMinutes(start);
        const endTime = toMinutes(end) + 10;    // 청소 시간 포함
        
        if (room.length === 0) {
            room.push(endTime);
        } else {
            const idx = room.findIndex((elem) => elem <= startTime);
            if (idx !== -1) {    // 사용 가능 객실 있으면
                room[idx] = endTime;
            } else {    // 없으면
                room.push(endTime); // 방 추가
            }
        }
    });
    
    return room.length;
}