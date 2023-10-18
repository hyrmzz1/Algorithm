import math
import sys

# 0부터 10000까지의 수 중 소수인 수 리스트에 넣기
def eratosthenes_sieve(limit):
    is_prime = [True] * (limit + 1) # 0~10000까지 모든 수 소수인 것으로 일단 초기화
    is_prime[0] = is_prime[1] = False  # 0과 1은 소수가 아님

    for i in range(2, int(math.sqrt(limit)) + 1):
        if is_prime[i]:
            j = 2
            while i * j <= limit:
                is_prime[i * j] = False
                j += 1

    primes = [k for k in range(2, limit + 1) if is_prime[k]]
    return primes
        
# 변수에 할당하지 않고 매번 함수를 호출하면 호출할 때마다 새로운 소수 목록 생성됨 
primes = eratosthenes_sieve(10000)

t = int(sys.stdin.readline().rstrip())
n = [int(sys.stdin.readline()) for _ in range(t)]

# n 이하 두 소수 중 합이 n인 것 출력
for l in n:
    prime1 = prime2 = l // 2
    while 1:
        if prime1 in primes and prime2 in primes:
            print(prime1, prime2)
            break
        else:
            prime1 -= 1
            prime2 += 1