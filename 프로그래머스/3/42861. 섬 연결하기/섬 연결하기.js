// 지나갈 수 있는지 확인 (같은 집합에 속해있는지 확인)
function findParent(parent, x) {
    return parent[x] !== x ? findParent(parent, parent[x]) : parent[x];
}

// 지나갈 수 없다면 다리 건설 (같은 집합에 속하도록 연결)
function unionParent(parent, a, b) {
    let aParent = findParent(parent, a);
    let bParent = findParent(parent, b);
    
    // aParent < bParent ? parent[b] = aParent : parent[a] = bParent;
    if (aParent < bParent) {
        // b와 같은 집합에 속하는 요소들도 a와 연결
        for (let i = 0; i < parent.length; i++) {
            if (parent[i] === bParent) parent[i] = aParent;
        }
    } else {
        // a와 같은 집합에 속하는 요소들도 b와 연결
        for (let i = 0; i < parent.length; i++) {
            if (parent[i] === aParent) parent[i] = bParent;
        }
    }
}

function solution(n, costs) {
    const parent = Array.from({ length: n }, (_, i) => i);
    let minCost = 0;
    
    costs.sort((a, b) => a[2] - b[2]);  // 비용순으로 오름차순 정렬
    
    costs.forEach(elem => {
        const [a, b, cost] = elem;
        
        if (findParent(parent, a) !== findParent(parent, b)) { // 같은 집합에 속해있지 않음
            unionParent(parent, a, b);  // 같은 집합에 속하도록 연결
            minCost += cost;
        }
    })
    
    return minCost;
}