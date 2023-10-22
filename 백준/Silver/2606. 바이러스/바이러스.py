import sys

n = int(sys.stdin.readline().rstrip())  # 컴퓨터의 수
m = int(sys.stdin.readline().rstrip())  # 직접 연결된 컴퓨터 쌍의 수

graph = [[0]*(n + 1) for _ in range(n + 1)] # (n + 1) * (n + 1) 빈 행렬
for _ in range(m):  # 행렬에 인접 노드 표시
    u, v = map(int, sys.stdin.readline().rstrip().split())
    graph[u][v] = graph[v][u] = 1

visited = [0] * (n + 1) # 노드별 방문 여부

# i와 인접한 것만 다 탐색
def dfs(i):
    visited[i] = 1
    for j in range(1, n+1):
        if graph[i][j] and not visited[j]:    # 인접, 아직 방문하지 않은 노드
            dfs(j)

dfs(1)
result = visited.count(1) - 1   # 1과 연결된 노드들은 다 방문했으므로 visited == 1인 노드 카운트. 본인(1)은 제외.
print(result)