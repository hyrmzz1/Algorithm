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

h_list = []
w_list = []
for i in range(1, len(height)):
    x = height[i] - height[i-1]
    h_list.append(x)
for j in range(1, len(width)):
    y = width[j] - width[j-1]
    w_list.append(y)
print(max(h_list)*max(w_list))