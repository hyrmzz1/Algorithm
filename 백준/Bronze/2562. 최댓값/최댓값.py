import sys

a = [int(sys.stdin.readline()) for _ in range(9)]

a_max = max(a)
print(a_max)
print(a.index(a_max) + 1)