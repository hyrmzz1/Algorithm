function solution(n, computers) {
    let cnt = 0;
    const visited = new Array(n).fill(0);
    
    const dfs = (computer) => {
        visited[computer] = 1; // 방문 처리

        // 인접 + 방문하지 않은 노드 방문
        for (let i = 0; i < n; i++) {
            if (i !== computer && computers[i][computer] === 1 && visited[i] === 0) {
                dfs(i);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {   // 컴퓨터 전체 돌면서
        if (visited[i] === 0) { // 아직 방문하지 않았다면
            dfs(i); // 방문 + 인접 컴퓨터 탐색
            cnt++;  // 한 뭉텅이 -> 네트워크 개수 +1
        }
    }
    
    return cnt;
}