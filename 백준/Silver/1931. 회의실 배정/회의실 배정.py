import sys
n = int(sys.stdin.readline().rstrip())   # 회의 개수
time = [tuple(map(int, sys.stdin.readline().rstrip().split())) for _ in range(n)]

# 가장 빨리 끝나는 걸 진행해야 최대한 많이 진행할 수 있다. +) 끝나는 시간과 최대한 가까운 회의 시작.
# 정렬 기준: 1) 먼저 끝나는 것 2) 끝나는 시간이 같다면 먼저 시작하는 것
time.sort(key = lambda x : (x[1], x[0]))

cnt = 0
last_end = 0
for start, end in time:
    if start >= last_end:   # 전 회의 끝나기 전에 시작하는 회의는 고려 X
        cnt += 1
        last_end = end
print(cnt)