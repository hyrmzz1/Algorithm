function solution(k, dungeons) {
    let answer = 0;
    const visited = new Array(dungeons.length).fill(false);
    
    const DFS = (piro, cnt) => {
        answer = Math.max(cnt, answer);
        
        // dungeons[i]에 방문하지 않았고, piro가 dungeons[i][0] 이상일 때
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && piro >= dungeons[i][0]) {
                visited[i] = true;
                DFS(piro - dungeons[i][1], cnt + 1);    // ++cnt 사용시 재귀 호출에서 돌아온 후에도 증가된 값이 유지되어 다음 경로를 탐색할 때도 누적된 값이 사용됨.
                visited[i] = false;
            }
        }
    }
    
    DFS(k, 0);
    
    return answer;
}