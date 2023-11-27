import sys
n = int(sys.stdin.readline())   # 개수 N
# 오름차순 정렬 - 계수 정렬 사용!
count = [0] * 10001 # 인덱스 0 ~ 10001

for _ in range(n):
    count[int(sys.stdin.readline())] += 1

for i in range(len(count)): # 인덱스를
    for _ in range(count[i]):   # 값만큼
        print(i, end = ' ')    # 출력