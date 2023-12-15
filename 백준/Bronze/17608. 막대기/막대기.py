import sys
n = int(sys.stdin.readline())   # 막대기 개수
h = [int(sys.stdin.readline()) for _ in range(n)]
cnt = 1
max_h = h[-1]
for i in range(n - 2, -1, -1):
    if h[i] > max_h:
        max_h = h[i]
        cnt += 1
print(cnt)