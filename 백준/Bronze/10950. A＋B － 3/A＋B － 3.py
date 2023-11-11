import sys
t = int(sys.stdin.readline())   # tc 개수
n = [list(map(int, sys.stdin.readline().split())) for _ in range(t)]

for i in range(t):
    print(n[i][0] + n[i][1])