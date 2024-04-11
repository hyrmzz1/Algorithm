function permutate(arr) {
    const cases = [];   // 탐험 순서 경우의 수
    
    // DFS
    const dfs = (i, arr) => {
        // base condition
        if (i === arr.length) {
            return cases.push([...arr]);
        }
        
        for (let j = i; j < arr.length; j++) {
            // swap
            [arr[i], arr[j]] = [arr[j], arr[i]];
            
            //dfs
            dfs(i + 1, arr);
            
            // swap back (백트랙킹)
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    dfs(0, arr);
    return cases;
}

function solution(k, dungeons) {
    const casePath = permutate(dungeons.map((dungeon, idx) => idx));
    let ans = 0;
    
    casePath.forEach(path => {
        let piro = k;
        let cnt = 0;
        
        path.forEach(i => {
            if (piro >= dungeons[i][0]) {
                piro -= dungeons[i][1];
                cnt ++;
            } else return false;
        })
        
        ans = Math.max(ans, cnt)
        if (ans === dungeons.length) return false;
    })
    
    return ans;
}