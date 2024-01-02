import sys
an, bn = map(int, sys.stdin.readline().split())
a = set(map(int, sys.stdin.readline().split()))
b = set(map(int, sys.stdin.readline().split()))

inter = a & b    # 교집합
print(an + bn - 2 * len(inter))