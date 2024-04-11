function solution(k, dungeons) {
    let ans = 0;
    const visited = new Array(dungeons.length).fill(0);
    
    function dfs(k, cnt) {
        ans = Math.max(ans, cnt)
        if (ans === dungeons.length) return;
        
        for (let i = 0; i < dungeons.length; i++){
            if (k >= dungeons[i][0] && !visited[i]) {
                visited[i] = 1;
                dfs(k - dungeons[i][1], cnt + 1);
                visited[i] = 0;
            }
        }
    }
    
    dfs(k, 0);
    return ans;
}