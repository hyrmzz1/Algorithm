import sys
t = int(sys.stdin.readline())   # tc 개수

for _ in range(t):  # tc 수만큼 아래 입력 반복
    n = int(sys.stdin.readline().rstrip())   # 지원자 수
    rank = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]    # [서류 순위, 면접 순위]
    rank.sort(key = lambda x:x[0])  # 서류 등수 오름차순 정렬

    new = 1 # 서류 1등은 무조건 뽑힘
    min = rank[0][1]
    for j in range(1, n):
        if rank[j][1] < min:  # 서류 1등보다 면접 등수 높으면
            min = rank[j][1]    # 서류 등수는 점점 낮아지니 min보다 면접 등수는 높아야 뽑힘
            new += 1
    print(new)