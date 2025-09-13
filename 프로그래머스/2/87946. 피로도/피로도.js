// DFS+백트래킹
// DFS로 경로 탐색 (DFS 내에서 매번 for문으로 경로를 생성함.)
// 해당 경로 방문 가능 여부 확인 후 불가능하면 백트래킹, 가능하면 DFS 마저 진행
function solution(k, dungeons) {
    let maxCount = 0; // 탐험한 최대 던전 수
    const visited = new Array(dungeons.length).fill(false);
    
    const dfs = (currPiro, count) => {
        maxCount = Math.max(maxCount, count);
        
        for (let i = 0; i < dungeons.length; i++) {
            // 탐험 불가
            if (visited[i] || currPiro < dungeons[i][0]) {
                continue;
            }
            
            visited[i] = true;
            dfs(currPiro -  dungeons[i][1], count + 1);
            visited[i] = false;
        }
    }
    
    dfs(k, maxCount);
    
    return maxCount;
}