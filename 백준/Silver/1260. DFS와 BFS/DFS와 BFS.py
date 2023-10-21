# 1260. dfs와 bfs
import sys
from collections import deque

n,m,v = map(int, sys.stdin.readline().rstrip().split()) # 노드 n, 간선 m, 시작 노드 v

# 입력값 행렬에 넣기
graph = [[0]*(n + 1) for _ in range(n + 1)]
for _ in range(m):  # m개의 라인동안 입력
    a, b = map(int, sys.stdin.readline().rstrip().split())
    graph[a][b] = graph[b][a] = 1

# 노드별 방문 여부 확인 (visited[1] = 1번 노드 방문 여부)
visited1 = [0] * (n + 1)
visited2 = [0] * (n + 1)

def dfs(v):
    visited1[v] = 1  # 제일 작은 노드 방문 (스택에 넣고 바로 꺼냄)
    print(v, end=' ')   #꺼내놓은거 출력
    for i in range(n + 1):  # 전체 노드들 중에
        if not visited1[i] and graph[v][i]:  # visited가 0이고 인접한 노드이면
            dfs(i)    # 해당 노드에 대해 위의 순서 반복

def bfs(v):
    q = deque([v])  # 시작 노드 큐에 넣고
    visited2[v] = 1 # 넣었으니 방문한 것으로 처리
    while q:    # 큐에 원소 없을 때(=False)까지 실행
        v = q.popleft()    # 바로 꺼냄
        print(v, end=' ')    # 꺼내면 출력
        for i in range(1, n + 1):    # 전체 노드들 중에
            if not visited2[i] and graph[v][i]:    # 아직 방문 안한 자식 노드들 번호순으로 하나씩 추가
                q.append(i)
                visited2[i] = 1    # 큐에 넣었으니 방문한 것으로 처리

dfs(v)
print()
bfs(v)