import sys
c = int(sys.stdin.readline())    # tc 개수

for _ in range(c):
    n = list(map(int, sys.stdin.readline().split()))
    avg = (sum(n) - n[0]) / n[0]
    cnt = 0
    for i in range(1, len(n)):
        if n[i] > avg:
            cnt += 1
    rate = cnt * 100 / n[0]
    print(f'{rate:.3f}%')