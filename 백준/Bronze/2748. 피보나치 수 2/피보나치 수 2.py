import sys
n = int(sys.stdin.readline().rstrip())

# bottom-up. 반복문 사용
if n <= 2:
    print(1)
else:
    d = [0] * (n + 1)
    d[1] = 1
    d[2] = 1
    for i in range(3, n + 1):
        d[i] = d[i - 1] + d[i - 2]
    print(d[n])