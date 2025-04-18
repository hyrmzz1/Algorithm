function solution(board) {
    const N = board.length;
    
    // 각 위치의 비용 = costs[r][c][dir]
    const costs = Array.from({ length: N }, () => 
        Array.from({ length: N }, () => 
            new Array(4).fill(Infinity)
        )
    );
    
    // 이동 방향 - 상 하 좌 우
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];
    
    const queue = [];   // [r, c, dir, cost]
    queue.push([0, 0, 1, 0]);  // 하향
    queue.push([0, 0, 3, 0]);  // 우향
    costs[0][0][1] = 0;
    costs[0][0][3] = 0;
    
    while (queue.length) {
        const [r, c, dir, cost] = queue.shift();
        
        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];
            
            // 접근 가능한 인접칸
            if (nr >= 0 && nr < N && nc >= 0 && nc < N && board[nr][nc] === 0) {
                let newCost = cost + 100;
                if (i !== dir) newCost += 500;  // 코너
                
                // 해당 칸에 더 적은 비용으로 갈 수 있는 경우에만 갱신
                if (newCost < costs[nr][nc][i]) {
                    costs[nr][nc][i] = newCost;
                    queue.push([nr, nc, i, newCost]);
                }
            }
        }
    }
    
    return Math.min(...costs[N - 1][N - 1]);
}