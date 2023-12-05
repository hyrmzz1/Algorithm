import sys
import math
a, b, v = map(int, sys.stdin.readline().split())

# v <= (a - b) * days + b 를 만족하는 days의 최솟값 출력
days = (v - b) / (a - b)
print(math.ceil(days))