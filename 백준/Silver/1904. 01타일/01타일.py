import sys
n = int(sys.stdin.readline().rstrip())

# bottom-up. 반복문 사용
cnt = [1] * (n + 1)
cnt[1] = 1  # 경우의 수

for i in range(2, n + 1):
    cnt[i] = (cnt[i - 1] + cnt[i - 2]) % 15746

print(cnt[n] % 15746)