import sys

n = int(sys.stdin.readline().rstrip())    # n은 0보다 크거나 같은 정수

def fac(n):
    if n > 1:
        return n * fac(n-1)
    else:    # 1! == 1, 0! == 1
        return 1

print(fac(n))