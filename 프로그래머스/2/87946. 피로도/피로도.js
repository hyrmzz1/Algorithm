function solution(k, dungeons) {
    let maxCount = 0;
    const visited = new Array(dungeons.length).fill(false);
    
    const dfs = (nowPiro, count) => {
        maxCount = Math.max(count, maxCount);
        
        for (let i = 0; i < dungeons.length; i++) {
            const [need, somo] = dungeons[i];
            
            // 방문 가능할 경우
            if (nowPiro >= need && !visited[i]) {            
                visited[i] = true;
                dfs(nowPiro - somo, count + 1);
                visited[i] = false;
            }
        }
    }
    
    dfs(k, 0);
    
    return maxCount;
}