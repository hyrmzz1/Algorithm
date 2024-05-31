function solution(n, edge) {
    // 인접리스트
    const adjList = Array.from({ length: n + 1 }, () => []);
    
    edge.forEach(nodes => {
        const [from, to] = nodes;
        adjList[from].push(to);
        adjList[to].push(from);
    })
    
    // dfs
    const dist = new Array(n + 1).fill(-1);
    const nodes = [1];  // 방문할 노드
    dist[1] = 0;
    
    while (nodes.length) {
        const node = nodes.shift();
        
        adjList[node].forEach(n => {
            if (dist[n] === -1) {   // 아직 방문 X
                dist[n] = dist[node] + 1;
                nodes.push(n);
            }
        })
    }
    
    const maxDist = Math.max(...dist);
    return dist.filter(d => d === maxDist).length;
}