function solution(userId, bannedId) {
    const bannedArr = [];
    const visited = new Array(userId).fill(false);
    
    // 1. 제재 아이디
    bannedId.map(id => {
        const regex = new RegExp('^' + id.replaceAll('*', '.') + '$');
        bannedArr.push(userId.filter(uid => regex.test(uid)));
    })
    
    // 2. 경우의 수 - dfs 돌며 방문하지 않은 아이디에 대한 경우의 수만 카운트
    const result = new Set();
    const temp = [];
    
    const dfs = (depth) => {
        if (depth === bannedArr.length) {
            result.add(temp.slice().sort().join(','));  // 중복 없도록 하기 위함
            return;
        }
        
        bannedArr[depth].forEach(bannedUser => {
            const idx = userId.indexOf(bannedUser);

            if (!visited[idx]) {    // 방문 X
                visited[idx] = true;    // 방문처리
                temp.push(bannedUser);
                dfs(depth + 1);
                temp.pop(bannedUser);   // 백트래킹
                visited[idx] = false;
            }
        })
    }
    
    dfs(0);
    
    return result.size;
}