def solution(n):
    answer = []
    if n % 2 == 0: n -= 1
    while n >= 1:
        answer.append(n)
        n -= 2
            
    return sorted(answer)