import sys
from collections import deque

n, m, k, x = map(int, sys.stdin.readline().rstrip().split())
# 빈 리스트 만들기
graph = [[] for _ in range(n + 1)]
# 인접 리스트
for i in range(m):
    u, v = map(int, sys.stdin.readline().rstrip().split())
    graph[u].append(v)

visited = [0] * (n + 1) # 노드별 방문 여부
dist = [0] * (n + 1)    # x로부터 노드별 최단 거리

# x부터 출발
q = deque([x])
visited[x] = 1
while q:
    now = q.popleft()
    for i in graph[now]:
        if not visited[i]:
            q.append(i)
            visited[i] = 1
            dist[i] = dist[now] + 1

# x에서 각 노드들 사이의 거리 (d) 확인.
dist_k = False
for j in range(1, n+1):
    if dist[j] == k:   # x로부터의 최단 거리가 k인 노드가 있다면
        print(j)
        dist_k = True

if not dist_k:  # x로부터의 최단 거리가 k인 노드가 없다면
    print(-1)