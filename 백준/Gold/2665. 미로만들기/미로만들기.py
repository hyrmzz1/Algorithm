'''
2665. 미로 만들기
BFS와 우선순위 큐를 이용하는데, 
검은 방에서 흰 방으로 바꾸는 횟수를 최소화해야 하므로 
우선순위 큐의 첫번째 원소를 '지금까지 흰색으로 바꾼 검은 방의 갯수'로 지정한다.

이렇게 하면 매번 우선순위 큐에서 원소를 뽑을 때마다 벽을 바꾼 횟수가 최소인 지점부터 뽑을 수 있고, (최소힙. 횟수가 맨 앞 => 우선순위)
그 지점을 기준으로 상하좌우를 탐색해 나가기 때문이다.
결과적으로 최소한으로 검은 방을 흰 방으로 바꾸면서 도착점까지 갈 수 있다.
'''
import sys
import heapq
# 입력 받기
n = int(sys.stdin.readline().rstrip())
graph = [list(map(int, sys.stdin.readline().rstrip())) for _ in range(n)] # 0: 검은 방, 1: 흰 방

def bfs(x, y):
    visited = [[0] * n for _ in range(n)]
    pq = []  # 우선순위 큐
    heapq.heappush(pq, (0, x, y))  # cnt(검은 방 -> 흰 방), 시작 방
    while pq:   # pq가 빌 때까지
        cnt, now_x, now_y = heapq.heappop(pq)

        if now_x == n-1 and now_y == n-1:   # 끝 방 도달
            return cnt
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:   # now_x, now_y의 인접 노드 탐색. 방향 - dx, dy
            next_x = now_x + dx
            next_y = now_y + dy
            if 0 <= next_x <= n-1 and 0 <= next_y <= n-1 and not visited[next_x][next_y]:   # 범위 내에, 아직 방문 X
                if graph[next_x][next_y] == 1:
                    heapq.heappush(pq, (cnt, next_x,next_y))
                else:   # 검은 방이라면
                    heapq.heappush(pq, (cnt + 1, next_x,next_y))    # 흰 방으로 바꿈
                visited[next_x][next_y] = 1 # 방문 체크
                
print(bfs(0, 0))   # (0,0)에서 시작