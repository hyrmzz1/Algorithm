import sys
n = int(sys.stdin.readline().strip())
num = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]

for i in range(1, n):
    for j in range(i + 1):
        if j == 0:
            num[i][j] += num[i - 1][j]
        elif j == i:
            num[i][j] += num[i - 1][j - 1]
        else:
            num[i][j] += max(num[i - 1][j], num[i - 1][j - 1])

print(max(num[n-1]))