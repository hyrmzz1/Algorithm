import sys
import math
n = int(sys.stdin.readline())   # 테스트케이스 개수
num = list(map(int, sys.stdin.readline().split()))

prime_cnt = 0
for i in num:
    if i < 2:
        continue
    for j in range(2, int(math.sqrt(i))+1):
        if i % j == 0:
            break
    else:
        prime_cnt += 1
print(prime_cnt)