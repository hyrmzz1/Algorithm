# 연결 요소의 개수 - DFS
import sys

n, m = map(int, sys.stdin.readline().rstrip().split())  # n: 노드, m: 간선
graph = [[0] * (n + 1) for _ in range(n + 1)]    # (n+1)*(n+1) 사이즈 행렬
for _ in range(m):  # m개의 라인에 걸쳐
    u, v = map(int, sys.stdin.readline().rstrip().split())  # 인접한 노드 두개 입력
    graph[u][v] = graph[v][u] = 1   # 연결되어 있으면 1. 무방향이니 [u][v] = [v][u]

# 노드별 방문 여부 체크 위한 리스트
visited = [0] * (n + 1)

# 연결 요소 카운팅
def dfs(i): # i번째 노드
    visited[i] = 1
    for j in range(1, n + 1): # 전체 노드들 중에서
        if not visited[j] and graph[i][j] == 1:    # i와 인접하고 방문하지 않은 노드 
            dfs(j)

cnt = 0
for i in range(1, n + 1):
    if not visited[i]:
        dfs(i)
        cnt += 1

print(cnt)