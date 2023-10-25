import sys
sys.setrecursionlimit(100001)

n = int(sys.stdin.readline().rstrip())  # 노드 개수
parent = [0] * (n + 1)  # 부모 노드 초기화

# 인접 리스트
graph = [[] for _ in range(n + 1)]
for _ in range(n - 1):
    u, v = map(int, sys.stdin.readline().rstrip().split())
    graph[u].append(v)
    graph[v].append(u)    # 트리는 양방향

# 부모 노드 탐색
# 부모 노드는 해당 노드 탐색 직전의 노드
def dfs(v):
    for i in graph[v]:
        if not parent[i]:
            parent[i] = v
            dfs(i)
dfs(1)
# 부모 노드 번호 출력 (2번부터 n번까지)
for i in range(2, n + 1):
    print(parent[i])