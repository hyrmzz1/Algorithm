import sys
an, bn = map(int, sys.stdin.readline().split())
a = set(map(int, sys.stdin.readline().split()))
b = set(map(int, sys.stdin.readline().split()))

xor = a ^ b    # 대칭차집합
print(len(xor))
