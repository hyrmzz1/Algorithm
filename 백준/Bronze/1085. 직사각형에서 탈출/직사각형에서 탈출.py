import sys
n = list(map(int, sys.stdin.readline().split()))    # x, y, w, h

ans = min(n[0], n[2] - n[0], n[1], n[3] - n[1]) # x, w-x, y, h-y 중 최소값
print(ans)