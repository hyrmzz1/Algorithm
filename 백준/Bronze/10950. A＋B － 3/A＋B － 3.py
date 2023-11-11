import sys
t = int(sys.stdin.readline())   # tc 개수

for _ in range(t):
    a, b = map(int, sys.stdin.readline().split())
    print(a + b)
