import sys
t = int(sys.stdin.readline())   # tc 개수

for _ in range(t):
    n = int(sys.stdin.readline())   # 통나무 개수
    l = list(map(int, sys.stdin.readline().split()))    # 통나무 높이
    l.sort()

    level = 0
    for i in range(2, n):
        level = max(level, abs(l[i] - l[i-2]))
    print(level)