def solution(numbers):
    sum = 0
    for i in numbers:
        sum += i
    return sum / len(numbers)