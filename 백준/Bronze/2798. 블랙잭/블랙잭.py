import sys
n, m = map(int, sys.stdin.readline().split())
cards = list(map(int, sys.stdin.readline().split()))

cards_sum = 0
max_sum = 0
for i in range(0, n):
    for j in range(i + 1, n):
        for k in range(j + 1, n):
            cards_sum = cards[i] + cards[j] + cards[k]
            if cards_sum <= m:
                max_sum = max(max_sum, cards_sum)

print(max_sum)