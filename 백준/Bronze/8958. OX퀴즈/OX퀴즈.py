import sys
n = int(sys.stdin.readline())   # tc 개수
quiz = [list(sys.stdin.readline().rstrip()) for _ in range(n)]

for i in quiz:  # ['O', 'O', 'X', 'X', 'O', 'X', 'X', 'O', 'O', 'O']
    score = 0
    sum_score = 0
    for j in i: # 'O'
        if j == "O":
            score += 1
            sum_score += score
        else:   # 'X'
            score = 0
    print(sum_score)