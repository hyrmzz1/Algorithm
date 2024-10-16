function solution(n, roads, sources, destination) {
    const answer = [];
    const adjList = Array.from({ length: n + 1 }, () => []); // 인접 리스트
    
    // 1. 인접 리스트 생성
    roads.forEach(([a, b]) => {
        adjList[a].push(b);
        adjList[b].push(a);
    })
    
    // destination에서 모든 노드로의 최단 거리 계산 (단일 BFS)
    const queue = [destination];
    const visited = new Array(n + 1).fill(false);
    const dist = new Array(n + 1).fill(Infinity);

    visited[destination] = true;
    dist[destination] = 0;

    while (queue.length > 0) {
        let curr = queue.shift();

        for (let adj of adjList[curr]) {
            if (!visited[adj]) {
                queue.push(adj);
                visited[adj] = true;
                dist[adj] = dist[curr] + 1;
            }
        }
    }
    
    // 2. source에서 destination까지의 최단 경로 구하고 answer에 push
    sources.forEach(source => {
        answer.push(dist[source] === Infinity ? -1 : dist[source]);
    })
    
    return answer;
}

// 시간 초과 발생 코드 -> 개선 방안: 매번 BFS 호출 X. 단일 BFS로 최단 거리를 모두 구하기
/*
function solution(n, roads, sources, destination) {
    const answer = [];
    const adjList = Array.from({ length: n + 1 }, () => []); // 인접 리스트
    
    // 1. 인접 리스트 생성
    roads.forEach(([a, b]) => {
        adjList[a].push(b);
        adjList[b].push(a);
    })
    
    const BFS = (start, destination) => {
        const queue = [];
        const visited = new Array(n + 1).fill(false);
        const dist = new Array(n + 1).fill(Infinity);
        
        queue.push(start);
        visited[start] = true;
        dist[start] = 0;
        
        while (queue.length > 0) {
            let curr = queue.shift();
            
            if (curr === destination) return dist[curr];
            
            for (let adj of adjList[curr]) {
                if (!visited[adj]) {
                    queue.push(adj);
                    visited[adj] = true;
                    dist[adj] = dist[curr] + 1;
                }
            }
        }
        
        return -1;
    }
    
    // 2. source에서 destination까지의 최단 경로 구하고 answer에 push
    sources.forEach(source => {
        answer.push(BFS(source, destination));
    })
    
    return answer;
}
*/