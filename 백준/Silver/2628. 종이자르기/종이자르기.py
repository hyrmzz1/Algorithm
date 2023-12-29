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

max_area = 0
for i in range(1, len(height)):
    for j in range(1, len(width)):
        x = height[i] - height[i-1]
        y = width[j] - width[j-1]
        max_area = max(x*y, max_area)
print(max_area)