import sys
n, x = map(int, sys.stdin.readline().split())
a = list(map(int, sys.stdin.readline().split()))

for i in a:
    if i < x:
        print(i, end=' ')