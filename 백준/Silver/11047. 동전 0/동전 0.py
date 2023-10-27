import sys

n, k = map(int, sys.stdin.readline().split())   # n: 동전 종류 수, k: 만들고자 하는 가치
coin_type = [int(sys.stdin.readline()) for _ in range(n)]   # 오름차순

cnt = 0
for coin in reversed(coin_type):    # 역반복문 -> coin_type 내림차순처럼 사용
    if coin > k:
        continue
    else:
        cnt += k // coin
        k %= coin
        if k == 0:
            break
print(cnt)