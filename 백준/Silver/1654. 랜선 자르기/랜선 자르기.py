N, K = map(int, input().split())
list = []
for _ in range(N):
    list.append(int(input()))

s = 1   # 최소 길이
e = max(list)   # 최대 길이

while s <= e:
    mid = (s + e) // 2
    LAN = 0
    for i in list:
        LAN += i // mid   # 잘린 랜선 개수
    if LAN >= K:   # K개 이상 만들 수 있는 경우
        s = mid + 1   # mid+1부터 e까지 탐색
    else:   # K만큼 만들 수 없는 경우
        e = mid - 1   # s부터 mid-1까지 탐색

print(e)