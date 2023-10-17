import sys
from itertools import combinations
n = [int(sys.stdin.readline().rstrip()) for _ in range(9)]

remove_one = 0
remove_two = 0
# n에서 합이 sum - 100 인 두 요소 찾기
for i in combinations(n, 2):
    if sum(n) - sum(i) == 100:
        remove_one, remove_two = i
        break
n.remove(remove_one)
n.remove(remove_two)

n.sort()
for l in n:
    print(l)