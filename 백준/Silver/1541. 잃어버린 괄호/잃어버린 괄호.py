import sys
expr = sys.stdin.readline().rstrip().split('-')
ans = 0
for i, val in enumerate(expr):
    num = val.split('+')
    for j in num:
        if i == 0:
            ans += int(j)
        else:
            ans -= int(j)

print(ans)
