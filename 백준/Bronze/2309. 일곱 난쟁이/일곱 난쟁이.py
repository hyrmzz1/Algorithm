import sys

n = [int(sys.stdin.readline().rstrip()) for i in range(9)]

sum = sum(n)

remove_one = 0
remove_two = 0
# 2개의 요소를 뻈을 떄 100이 나오면 -> n에서 두개 요소 삭제
for j in range(0, len(n) - 1):
    for k in range(j + 1, len(n)):
        if sum - n[j] - n[k] == 100:
            remove_one = n[j]
            remove_two = n[k]

n.remove(remove_one)
n.remove(remove_two)
n.sort()
for l in n:
    print(l)