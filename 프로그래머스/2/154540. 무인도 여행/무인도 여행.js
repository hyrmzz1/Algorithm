// flood fill algorithm (다차원 배열의 어떤 칸과 연결된 영역을 찾는 알고리즘)
// DFS, BFS 모두로 풀이 가능
// 입력받은 배열을 순회
// !visited && !=='X'인 요소 찾기
// 해당 요소부터 !visited && !=='X'인 인접 요소 합 구하기

const dfs = (row, col, maps, visited) => {
    visited[row][col] = true;   // 방문 처리
    let sum = Number(maps[row][col]);
    
    // 상하좌우
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    
    // 이동
    for (let i = 0; i < 4; i++) {
        const ny = row + dy[i];
        const nx = col + dx[i];

        if (ny >= 0 && ny < maps.length && nx >=0 && nx < maps[0].length && maps[ny][nx] !== "X" && !visited[ny][nx]) {
            sum += dfs(ny, nx, maps, visited);
        }
    }
    
    return sum;
}

function solution(maps) {
    const answer = [];
    
    maps = maps.map(str => str.split(''));
    const visited = Array.from({ length: maps.length }, () => new Array(maps[0].length).fill(false));
    
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (maps[i][j] !== "X" && !visited[i][j]) {
                answer.push(dfs(i, j, maps, visited));
            }
        }
    }
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}