# (1,1) 지점에서부터 BFS 수행해 모든 노드의 값을 거리 정보로 넣고, 특정 노드 방문시 이전 노드의 거리에 1 더한 값을 리스트에 넣자. 노드의 값을 1에서 2로?
import sys
from collections import deque

n, m = map(int, sys.stdin.readline().rstrip().split())
graph = []
# 각 노드와 인접한 노드 1로 표시
for _ in range(n):  # n개의 라인동안 입력
    graph.append(list(map(int, sys.stdin.readline().rstrip())))
# 인접 확인하기 위한 방향 - 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
# (1,1)에서 시작. => x=0, y=0
def bfs(x, y):
    # 상하좌우 이동, 1이고, visited 아닌곳만 방문.
    q = deque()
    q.append((x, y))    # 제일 작은 노드부터 시작
    while q:    # q가 빈 상태가 되면 종료
        x, y = q.popleft()
        # 인접하고 갈 수 있으면서(0 아닌) 아직 안들린(1) 노드
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx < 0 or ny <0 or nx >= n or ny >= m:   # 그래프 범위 벗어나면
                continue
            if graph[nx][ny] != 1:
                continue
            if graph[nx][ny] == 1:
                graph[nx][ny] = graph[x][y] + 1
                q.append((nx, ny))
    return graph[n-1][m-1]

print(bfs(0, 0))