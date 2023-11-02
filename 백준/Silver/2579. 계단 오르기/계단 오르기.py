# 계단오르기
import sys
n = int(sys.stdin.readline().rstrip())  # 계단 개수
scores = [0] * 301  # 계단 개수는 300이하의 자연수. [0]은 시작점.
for i in range(1, n + 1):  # 각 계단에 쓰인 점수
    scores[i] = int(sys.stdin.readline().rstrip())

dp = [0] * 301  # dp[0]은 시작점.
dp[1] = scores[1]   # 1번째 계단 가면서 얻을 수 있는 최대 점수
dp[2] = scores[1] + scores[2]
dp[3] = max(scores[1] + scores[3], scores[2] + scores[3])

for i in range(4, n + 1):
    dp[i] = max(dp[i - 3] + scores[i - 1] + scores[i], dp[i - 2] + scores[i])

print(dp[n])