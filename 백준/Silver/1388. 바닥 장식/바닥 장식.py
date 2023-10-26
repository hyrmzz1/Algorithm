import sys
n, m = map(int, sys.stdin.readline().rstrip().split())   # n: 세로(행), m: 가로(열)
# 바닥 장식 모양 입력받기 -> 인접 행렬. n줄만큼 입력받고, 한 줄에서 입력받은 m개의 요소 각각 저장.
matrix = [list(sys.stdin.readline().rstrip()) for _ in range(n)]
visited = [[0] * m for _ in range(n)]

def dfs(x, y, shape):
    visited[x][y] = 1
    for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
        nx = x + dx
        ny = y + dy
        if 0 <= nx < n and 0 <= ny < m and not visited[nx][ny]:
            if shape == '-':
                if shape == matrix[nx][ny] and x == nx:
                    dfs(nx, ny, shape)
            else:   # shape == '|'
                if shape == matrix[nx][ny] and y == ny:
                    dfs(nx, ny, shape)

cnt = 0 # 나무 판자 개수 -> 문양 다른거 나올 때마다 ++
for i in range(n):
     for j in range(m):
          if not visited[i][j]:
               cnt += 1
               dfs(i, j, matrix[i][j])
               
print(cnt)