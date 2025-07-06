function solution(k, dungeons) {
    let maxCount = 0;
    const visited = new Array(dungeons.length).fill(false);
    
    const dfs = (nowPiro, count) => {
        maxCount = Math.max(count, maxCount);
        
        for (let i = 0; i < dungeons.length; i++) {
            const [need, somo] = dungeons[i];
            
            // 방문 가능 여부 확인
            if (nowPiro < need) continue;
            if (visited[i]) continue;
            
            visited[i] = true;
            dfs(nowPiro - somo, count + 1);
            
            visited[i] = false;
        }
    }
    
    dfs(k, 0);
    
    return maxCount;
}