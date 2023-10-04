def solution(slice, n):
    if n % slice != 0:
        pizza = n // slice + 1
    else:
        pizza = n / slice
    return pizza