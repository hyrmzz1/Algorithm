import sys
n = int(sys.stdin.readline().rstrip())

def hanoi(n, start, end):
    if n == 1:
        print(start, end)
        return  # 재귀 종료

    hanoi(n - 1, start, 6 - start - end)
    print(start, end)
    hanoi(n - 1, 6 - start - end, end)

print(2**n - 1) # 옮긴 횟수
if n <= 20:
    hanoi(n, 1, 3)