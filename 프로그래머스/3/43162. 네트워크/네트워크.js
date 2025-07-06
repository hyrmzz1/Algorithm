// Union-find
function solution(n, computers) {
    const parent = Array.from({ length: n }, (_, idx) => idx);
    
    // 부모 노드를 찾는 함수
    const find = (x) => {
        if (parent[x] === x) return x;
        
        return parent[x] = find(parent[x])
    }

    // 두 노드를 합치는 함수
    const union = (x, y) => {
        const xRoot = find(x);
        const yRoot = find(y);

        if (xRoot === yRoot) return;    // 이미 합쳐져 있는 경우
        return parent[yRoot] = xRoot;
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (i === j) continue;  // 자기 자신
            
            // 두 컴퓨터가 연결된 경우
            if (computers[i][j]) {
                union(i, j);
            }
        }
    }
    
    // parents = [0, 0, 0, 0, 2] 임에도 하나의 네트워크로 연결될 수 있다.
    const roots = new Set();
    
    for (let node of parent) {
        roots.add(find(node));
    }
    
    return roots.size;
}