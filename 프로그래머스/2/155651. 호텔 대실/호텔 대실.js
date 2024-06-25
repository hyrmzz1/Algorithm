const toMinutes = (str) => {
    const [hour, minute] = str.split(':').map(x => Number(x));
    return hour * 60 + minute;
}

function solution(bookTime) {
    const room = [];    // 필요한 방
    
    bookTime.sort().forEach(([start, end]) => {
        const startTime = toMinutes(start);
        const endTime = toMinutes(end) + 10;    // 청소 시간 포함
        
        const idx = room.findIndex((elem) => elem <= startTime);    // -1이라면 사용 가능한 방 X
        idx === -1 ? room.push(endTime) : room[idx] = endTime;  // 사용 가능한 방 있다면 해당 방의 사용 시간 갱신
    });
    
    return room.length;
}