function solution(dirs) {
    let x = 0, y = 0;   // 현재 위치
    const path = new Set();
    
    for (const d of dirs) {
        let prevX = x, prevY = y;   // 출발 지점
        
        if (d === "U") {
            if (y === 5) continue;
            y++;
        } else if (d === "D") {
            if (y === -5) continue;
            y--;
        } else if (d === "R") {
            if (x === 5) continue;
            x++;
        } else {    // d === "L"
            if (x === -5) continue;
            x--;
        }
        
        path.add(`${prevX}, ${prevY}, ${x}, ${y}`);
        path.add(`${x}, ${y}, ${prevX}, ${prevY}`);
    }
    
    return path.size / 2;
}