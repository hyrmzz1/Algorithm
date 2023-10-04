import math

def solution(price):
    answer = 0
    if price < 100000:
        answer = price
    else:   # 10만원 이상
        if price < 300000:  # 10만원 이상 30만원 미만
            discount = 0.05
        elif price < 500000:    # 30만원 이상 50만원 미만
            discount = 0.1
        else:   # 50만원 이상
            discount = 0.2
        answer = price * (1 - discount)
    return math.trunc(answer)