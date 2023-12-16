import sys
w, h = map(int, sys.stdin.readline().split())
width = [0, w]  # 원점, 끝점
height = [0, h] # 원점, 끝점

n = int(sys.stdin.readline())   # 점선 개수
for _ in range(n):
    a, b = map(int, sys.stdin.readline().split())
    if a == 0:
        height.append(b)
    else:
        width.append(b)
        
height.sort()
width.sort()

print(
    max([width[i] - width[i - 1] for i in range(1, len(width))])
    *
    max([height[i] - height[i - 1] for i in range(1, len(height))])
)