import sys
from collections import deque
n = list(map(int, sys.stdin.readline().split()))    # [N, K]

queue = deque() # 큐 구현
for i in range(n[0]):
    queue.append(i + 1)
yose = []

while queue:    # 큐가 존재할 때까지
    for i in range(n[1] - 1):
        # queue[0], queue[1] 뒤로 보내기
        queue.append(queue.popleft())
    # queue[3] 삭제하고 빈 리스트에 넣기
    yose.append(queue.popleft())

yose_result = ', '.join(map(str, yose))
print(f'<{yose_result}>')