import sys
n = [int(sys.stdin.readline().rstrip()) for _ in range(3)]

a = list(map(int, str(n[0] * n[1] * n[2])))    # [1, 7, 0, 3, 7, 3, 0, 0]
for i in range(0, 10):
    print(a.count(i))