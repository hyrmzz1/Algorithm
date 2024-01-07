import sys
import itertools

while True:
    arr = list(map(int, sys.stdin.readline().split()))
    
    if arr[0] == 0:
        break
    nCr = itertools.combinations(arr[1:], 6)
    for i in nCr:
        print(*i)
    print() # 각 테스트 케이스 사이에 빈 줄 하나 출력