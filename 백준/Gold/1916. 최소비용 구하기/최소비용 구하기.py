import sys
import heapq

n = int(sys.stdin.readline().rstrip())  # 도시 개수
m = int(sys.stdin.readline().rstrip())  # 버스 개수

# 모든 간선 정보 담는 인접 리스트
graph = [[] for _ in range(n + 1)]  # 인접 리스트 내에 n개의 빈 리스트 생성
for _ in range(m):
    a, b, c = map(int, sys.stdin.readline().split())    # a, b => 노드 / c => 가중치
    graph[a].append((b, c))   # a 노드에 대한 인접 노드와 가중치 저장

start_v, end_v = map(int, sys.stdin.readline().split()) # 출발 노드, 도착 노드

INF = int(1e9)
dist = [INF] * (n + 1)  # 최단 거리 테이블. 모두 무한으로 초기화.

# 가중치 없는 최단경로 / 최소비용 -> BFS, 가중치 있는 -> 다익스트라
def dijkstra(start):
    q = []
    # 시작노드
    heapq.heappush(q, (0, start))   # 우선순위 가중치로 돌려야하니까 0이 먼저
    dist[start] = 0
    while q:    # 큐가 빌 때까지 반복
        distance, now = heapq.heappop(q) # (0, start)
        # 인접 노드 확인
        if dist[now] < distance:  # 이미 방문되었고 더 짧은 거리가 저장된 노드
            continue    # 갱신 안 함 (건너 뜀)
        for i in graph[now]:    # now와 인접한 노드 중에서
            cost = distance + i[1]
            if cost < dist[i[0]]:  # 거쳐가는게 다이렉트로 가는 것보다 가중치 낮으면
                dist[i[0]] = cost   # 갱신
                heapq.heappush(q, (cost, i[0]))

dijkstra(start_v)
print(dist[end_v])