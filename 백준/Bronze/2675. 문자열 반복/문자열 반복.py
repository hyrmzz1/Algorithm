import sys
# 테스트 케이스 개수 입력받기
tc = int(sys.stdin.readline())

# 테스트 케이스 개수만큼 반복문 실행
for i in range(tc):
    r, s = sys.stdin.readline().split()
    r = int(r)

    p = ''
    for i in s:
        p += i * r
    print(p)