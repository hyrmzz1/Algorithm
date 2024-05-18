function solution(maps) {
    const n = maps.length - 1;  // row
    const m = maps[0].length - 1;   // col
    
    // 상대 팀 진영 도착 불가
    // if (maps[n][m - 1] === 0 && maps[n - 1][m] === 0) return -1;
    
    // 이동 방향
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const queue = [[0, 0, 1]]; // 방문할 곳, 거리
    maps[0][0] = 0; // 출발점 방문처리
    
    while(queue.length) {
        let [x, y, dist] = queue.shift();
        
        // 상하좌우 이동
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            
            if (nx >= 0 && nx <= n && ny >= 0 && ny <= m && maps[nx][ny] === 1) {   // 갈 수 있으면
                if (nx === n && ny === m) return ++dist;  // 도착
                
                queue.push([nx, ny, dist + 1]);   // 방문
                maps[nx][ny] = 0;   // 다시 방문 불가
            }
        }
    }
    
    return -1;  // 상대 팀 진영 접근 불가
}