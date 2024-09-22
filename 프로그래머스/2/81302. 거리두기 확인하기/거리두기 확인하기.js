const BFS = (row, col, array) => {
    // 상하좌우
    const dy = [1, -1, 0, 0];
    const dx = [0, 0, 1, -1];
    
    const visited = Array.from({length: 5}, () => new Array(5).fill(false));
    const queue = [[row, col, 0]];
    visited[row][col] = true;
    
    while (queue.length) {
        const [y, x, dist] = queue.shift();
        
        if (dist > 1) continue; // 거리 2 이상은 탐색 X
        
        // 탐색 (상하좌우)
        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            
            // 범위 확인
            if (ny >= 0 && ny < 5 && nx >= 0 && nx < 5 && !visited[ny][nx]) {
                if (array[ny][nx] === "P") {    // 응시자 인접
                    return 0;
                } else if (array[ny][nx] === "O") { // 빈 테이블 인접
                    // 빈 테이블의 상하좌우에 P 존재하면 안됨
                    queue.push([ny, nx, dist + 1]);
                }
            }
        }
    }
    
    return 1;
}

function solution(places) {
    const answer = [];
    
    places.forEach(place => {
        place = place.map(row => row.split(''));
        let isSafe = true;
        
        // BFS
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (place[i][j] === "P") {
                    if (BFS(i, j, place) === 0) {
                        isSafe = false;
                        break;
                    }
                }
            }
            if (!isSafe) break;
        }
        
        isSafe ? answer.push(1) : answer.push(0);
    })
    
    return answer;
}