function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const colByOil = new Array(m).fill(0);
    let maxOil = 0;
    
    // 1. BFS - 각 덩어리의 size와 minCol 및 maxCol 구하기
    const visited = Array.from({ length: n }, () => new Array(m).fill(false));
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++){
            if (land[i][j] === 1 && !visited[i][j]) {
                const queue = [[i, j]];
                visited[i][j] = true;
                
                let size = 0;
                let minCol = j, maxCol = j;
                
                while (queue.length) {
                    const [y, x] = queue.shift();
                    
                    size++;
                    minCol = Math.min(minCol, x);
                    maxCol = Math.max(maxCol, x);
                    
                    for (const [dy, dx] of dir) {
                        const ny = y + dy;
                        const nx = x + dx;
                        
                        // 인접하고 아직 방문하지 않은 칸
                        if (
                            ny >= 0 && nx >= 0 && ny < n && nx < m
                            && land[ny][nx] === 1 && !visited[ny][nx]
                        ) {
                            queue.push([ny, nx]);
                            visited[ny][nx] = true;
                        }
                    }
                }
                
                // 2. 한 덩어리 다 구함
                for (let i = minCol; i <= maxCol; i++) {
                    colByOil[i] += size;
                }
            }
        }
    }
    
    
    return Math.max(...colByOil);
}