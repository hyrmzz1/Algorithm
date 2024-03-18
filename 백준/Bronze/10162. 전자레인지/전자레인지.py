import sys
t = int(sys.stdin.readline())   # 맞춰야 하는 시간 (초)
a, b, c = 300, 60, 10
cnt_a, cnt_b, cnt_c = 0, 0, 0

cnt_a = t // a
cnt_b = (t % a) // b
cnt_c = ((t % a) % b) // c

if ((t % a) % b) % c:
    print(-1)
else:
    print(cnt_a, cnt_b, cnt_c)