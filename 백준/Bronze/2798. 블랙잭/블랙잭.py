import sys
import itertools
n, m = map(int, sys.stdin.readline().split())
cards = list(map(int, sys.stdin.readline().split()))
cPn = itertools.permutations(cards, 3)

max_sum = 0
for i in cPn:
    if sum(i) <= m:
        max_sum = max(max_sum, sum(i))

print(max_sum)