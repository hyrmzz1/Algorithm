import sys
n = int(sys.stdin.readline().rstrip())  #26
cycle = 0
new = n

while 1:
    a = new // 10 # 십의 자리 수 2
    b = new % 10  # 일의 자리 수 6
    c = a + b   # 각 자리 수의 합 8
    new = b * 10 + c % 10  # 주어진 수 가장 오른 쪽 자리 + 합의 가장 오른 자리 수
    cycle += 1

    if n == new:
        break
print(cycle)