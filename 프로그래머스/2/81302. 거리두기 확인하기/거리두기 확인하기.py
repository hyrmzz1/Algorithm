from collections import deque

def BFS(row, col, array):
    # 상하좌우
    dy = [1, -1, 0, 0]
    dx = [0, 0, 1, -1]
    
    visited = [[False] * 5 for _ in range(5)]
    queue = deque([[row, col, 0]])    # 행, 열, 거리
    visited[row][col] = True;
    
    while queue:
        y, x, dist = queue.popleft()
        
        # 거리 2 이상은 탐색 X
        if dist > 1:
            continue
            
        for i in range(4):
            ny = y + dy[i]
            nx = x + dx[i]
            
            # 범위, 방문여부 체크
            if 0 <= ny <= 4 and 0 <= nx <= 4 and not visited[ny][nx]:
                visited[ny][nx] = True; # 방문처리
                
                if array[ny][nx] == "P":
                    return 0
                elif array[ny][nx] == "O":
                    queue.append([ny, nx, dist + 1])
            
    return 1    # 인접 요소가 파티션일 때 포함

def solution(places):
    answer = []
    
    for place in places:
        place = [list(row) for row in place]
        is_safe = True
        
        # P인 요소만 탐색
        for i in range(5):
            for j in range(5):
                if place[i][j] == "P":
                    if BFS(i, j, place) == 0:
                        is_safe = False
                        break   # 내부 반복문 종료
            if not is_safe:
                break   # 외부 반복문 종료
        
        answer.append(1 if is_safe else 0)
        
    return answer