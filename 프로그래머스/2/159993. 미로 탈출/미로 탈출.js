const BFS = (startIdx, endStr, map) => {
    // 상, 하, 좌, 우
    const dy = [1, -1, 0, 0];
    const dx = [0, 0, -1, 1];
    
    let time = 0;
    const queue = [startIdx];
    map[startIdx[0]][startIdx[1]] = "X";    // 방문 처리
    
    while (queue.length) {
        const size = queue.length;  // 현재 레벨 노드 수
        
        for (let i = 0; i < size; i++) {
            const [y, x] = queue.shift();

            // 상하좌우 탐색
            for (let j = 0; j < 4; j++) {
                let ny = y + dy[j];
                let nx = x + dx[j];

                // 범위 확인 - X이거나 map 밖일 경우 이동 불가
                if (ny >= 0 && ny < map.length && nx >= 0 && nx < map[0].length && map[ny][nx] !== "X") {
                    if (map[ny][nx] === endStr) return ++time;

                    queue.push([ny, nx]);
                    map[ny][nx] = "X";    // 방문 처리
                }
            }
        }
        time++; // 한 레벨 모두 처리 후에 시간 증가
    }
    
    return -1;  // 방문할 칸 없을 경우
}

function solution(maps) {
    // 2차원 배열로 전환
    const maps1 = maps.map(row => row.split(''));   // s -> l
    const maps2 = maps.map(row => row.split(''));   // l -> e
    
    // S, L 좌표 찾기
    let start = [];
    let lever = [];
    
    for (let y = 0; y < maps1.length; y++) {
        for (let x = 0; x < maps1[0].length; x++) {
            if (maps1[y][x] === "S") {
                start = [y, x];
            }
            
            if (maps1[y][x] === "L") {
                lever = [y, x];
            }
        }
    }
    
    const sToL = BFS(start, "L", maps1);
    console.log('-------------')
    const lToE = BFS(lever, "E", maps2);
    
    if (sToL === -1 || lToE === -1) return -1;
    
    return sToL + lToE;
}