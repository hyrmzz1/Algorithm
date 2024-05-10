function solution(n, wires) {
    let answer = Number.MAX_SAFE_INTEGER;   // JS에서 안전한 최대 정수값
    
    // 인접 리스트
    const graph = Array.from(Array(n + 1), () => new Array());
    wires.forEach(wire => {
        let [from, to] = wire;
        graph[from].push(to);
        graph[to].push(from);
    })
    
    const bfs = (start, except) => {
        let cnt = 0;
        const queue = [start];
        const visited = new Array(n + 1).fill(0);
        visited[start] = 1; // 시작 노드 방문처리
        
        while (queue.length) {
            let a = queue.shift();
            
            graph[a].forEach(elem => {
                if (elem !== except && !visited[elem]) {
                    visited[elem] = 1;
                    queue.push(elem);
                }
            })
            
            cnt++;  // except 제외 인접 노드 없더라도 자기 자신 속하니까 +1
        }
        
        return cnt;
    }
    
    // 전선 하나씩 끊으며 두 전력망 노드 차 최소값 구하기
    wires.forEach(wire => {
        let [from, to] = wire;
        answer = Math.min(answer, Math.abs(bfs(from, to) - bfs(to, from)));
    })
    
    return answer;
}