import sys
n = int(sys.stdin.readline().rstrip())

d = [0] * (n + 1)
# top-down. 재귀 & 메모이제이션
def fibo(x):
    if x == 1 or x == 2:
        return 1
    if d[x] != 0:   # 이미 처리되었다면
        return d[x] # 그대로 반환
    d[x] = fibo(x - 1) + fibo(x - 2)    # 아직 계산하지 않은 x에 대해서만 피보나치
    return d[x]

print(fibo(n))