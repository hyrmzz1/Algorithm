import sys
n = int(sys.stdin.readline())    # 정수 N

i = 2
while n != 1:
    if n % i == 0:    # n을 가장 작은 수로 나누기
        n = n // i
        print(i)
    else:
        i += 1