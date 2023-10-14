import sys
n_num = sys.stdin.readline()    # 수의 개수
n = list(map(int, sys.stdin.readline().split()))    # n개의 수 입력

# n개의 수 중 소수 개수 (리스트 n에서 소수 개수)
prime_cnt = 0
for i in n:
    # 소수 판별. 소수는 1과 자기 자신으로만 나눠지는 수.
    if i < 2:
        continue
    else:   # i는 2 이상의 수
        for j in range(2, i):   # i가 1이 아닐 때 실행
            if i % j == 0:
                break
        else:    
            prime_cnt += 1
print(prime_cnt)