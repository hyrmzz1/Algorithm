import sys
n, m = map(int, sys.stdin.readline().rstrip().split())  # 나무 수, 가져가려는 길이
tree = list(map(int, sys.stdin.readline().rstrip().split()))    # 나무 높이

start = 1
end = max(tree)

while start <= end:
    mid = (start + end) // 2
    cut = 0

    for i in tree:
        if i > mid:
            cut += (i - mid)
        
    if cut < m:
        end = mid - 1
    else:
        start = mid + 1
print(end)