# 숫자의 합
import sys
x = sys.stdin.readline().rstrip()

if x[0] == "0":
    if x[1] =="x":  # 16진수
        print(int(x, 16))
    else:   # 8진수
        print(int(x, 8))
else:   # 10진수
    print(int(x))