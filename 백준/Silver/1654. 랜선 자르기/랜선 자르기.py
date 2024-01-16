import sys
k, n = map(int, sys.stdin.readline().split())
k_list = [int(sys.stdin.readline()) for _ in range(k)]

start = 1
end = max(k_list)

while start <= end:
    mid = (start + end) // 2
    lan = 0 # 랜선 개수
    for i in k_list:
        lan += i // mid
    if lan < n:
        end = mid - 1
    else:
        start = mid + 1
print(end)