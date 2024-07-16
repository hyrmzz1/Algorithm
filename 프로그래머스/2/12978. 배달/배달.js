function solution(N, road, K) {
    const dist = new Array(N + 1).fill(500000)    // 1번 -> N번 마을로 가는 최단 거리
    dist[1] = 0; // 출발 지점
    
    const graph = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(Infinity));   // 인접 리스트
    road.forEach(([start, end, time]) => {
        graph[start][end] = Math.min(graph[start][end], time);
        graph[end][start] = Math.min(graph[end][start], time);
    })
    
    // 방문하지 않은 노드로의 최단 거리 계산
    const queue = [1];  // 1: 출발지점
    while (queue.length > 0) {
        const from = queue.pop();
        
        graph[from].forEach((cost, to) => {
            if (graph[from][to] !== Infinity) {   // 인접 && 방문 안한 노드
                if (dist[to] > dist[from] + cost) {
                    dist[to] = dist[from] + cost;    // 1->to 최단경로 갱신
                    queue.push(to);
                }
            }
        })
    }
    
    return dist.filter(country => country <= K).length;
}