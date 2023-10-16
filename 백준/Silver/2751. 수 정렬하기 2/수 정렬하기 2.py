import sys
n = int(sys.stdin.readline())
tc =[int(sys.stdin.readline()) for i in range(n)]

# 오름차순 정렬 결과를 한 줄에 하나씩 출력
tc.sort()
for i in range(n):
    print(tc[i])