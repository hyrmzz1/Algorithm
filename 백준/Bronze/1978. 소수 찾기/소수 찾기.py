import sys
import math
n = int(sys.stdin.readline())
num = list(map(int, sys.stdin.readline().split()))
cnt = 0

for i in num:
    if i < 2:    # 1은 소수 X.
        continue
    else:
        for j in range(2, int(math.sqrt(i)) + 1):   # int()는 소숫점 버림으로써 정수형으로 형변환.
            if i % j == 0:
                break
        else:    # break 등으로 중간에 빠져나오지 않고 for문 전부 순회했을 때 수행
            cnt += 1
print(cnt)