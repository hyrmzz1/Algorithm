import sys

expr = sys.stdin.readline().rstrip().split('-')
ans = 0
# '-' 나오기 전
num = expr[0].split('+')
for i in num:
    ans += int(i)

# ()로 묶을 곳
for j in expr[1:]:
    num = j.split('+')
    for l in num:
        ans -= int(l)

print(ans)