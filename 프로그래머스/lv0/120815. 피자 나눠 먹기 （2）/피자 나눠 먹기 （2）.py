import math
def solution(n):
    pizza_box = 0
    if n % 6 == 0:
        pizza_box = n / 6
    else:
        # 최대공약수 구하고, n을 최대 공약수로 나눈다. 
        a = math.gcd(n, 6)
        pizza_box = n / a
    return pizza_box