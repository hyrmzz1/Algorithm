import sys
import itertools

n = int(sys.stdin.readline())
nto1 = [i for i in range(1, n + 1)]
nPr = list(itertools.permutations(nto1, n))

for j in nPr:
    print(*j)