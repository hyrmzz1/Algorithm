import sys
n = int(sys.stdin.readline())

for i in range(1, n + 1):
    if n == i + sum(list(map(int, str(i)))):    # i + i의 각 자리수
        print(i)
        break;    # 가장 작은 생성자 출력하는거니까
    if n == i:    # 생성자 X
        print(0)