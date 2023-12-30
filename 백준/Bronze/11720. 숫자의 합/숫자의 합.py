import sys
n = int(sys.stdin.readline())   # 숫자 개수
numbers = sys.stdin.readline().rstrip()   # 숫자 n개

sum = 0
if n == len(numbers):
    for i in numbers:
        sum += int(i)
print(sum)