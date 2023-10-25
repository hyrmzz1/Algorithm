'''
7569. 토마토
'최소일수', '주변의 토마토들을 익힘', 여러 익은 토마토로부터 동시다발적으로 퍼져나가니까 
=> BFS 사용
3차원으로 퍼져나간다. => dz, dx, dy
'''
import sys
from collections import deque

m,n,h = map(int, sys.stdin.readline().split())
# 3차원 배열 입력받기
box = [[list(map(int, sys.stdin.readline().split())) for _ in range(n)] for _ in range(h)]  # 익었는지 안익었는지

def bfs():
    # 익은 토마토를 큐에 넣기 -> 익은 토마토로부터 퍼지니까. 시작점은 익은 토마토.
    q = deque()
    for i in range(h):  # 단
        for j in range(n):  # 행
            for k in range(m):  # 열
                if box[i][j][k] == 1:   # 익은 토마토라면 큐에 추가. 익었으니까 day = 0
                    q.append((i, j, k, 0)) # 단, 행, 열, days

    while q:    # 큐가 빌 때까지.
        z, x, y, days = q.popleft() # h-> z, n-> x, m-> y
        # 인접 토마토 탐색
        for dz, dx, dy in [(1, 0, 0), (-1, 0, 0), (0, 1, 0), (0, -1, 0), (0, 0, -1), (0, 0, 1)]:    # z축 ↕ / x축 ↕ / y축 ↔
            now_z = z + dz
            now_x = x + dx
            now_y = y + dy
            now_days = days + 1

            if 0 <= now_z < h and 0 <= now_x < n and 0 <= now_y < m:    # 범위 내의 토마토
                if box[now_z][now_x][now_y] == 0:   # 안익었다면
                    box[now_z][now_x][now_y] = 1    # 익히고
                    q.append((now_z, now_x, now_y, now_days)) # 날짜 업데이트 해서 큐에 추가. 순서 검산 해보기

    for i in range(h):  # 단
        for j in range(n):  # 행
            for k in range(m):  # 열
                if box[i][j][k] == 0:   # 안익은게 있으면
                    return -1
    return days

print(bfs())