import math

def solution(numer1, denom1, numer2, denom2):   # 분자: numer, 분모: denom
    answer = []
    denom = denom1 * denom2
    numer = numer1 * denom2 + numer2 * denom1
    # 기약분수 만들기
    gcd = math.gcd(denom, numer)    # 최대 공약수
    answer = [numer / gcd, denom / gcd]
    return answer