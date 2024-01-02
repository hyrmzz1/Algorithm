import sys
stack_l = list(sys.stdin.readline().rstrip())
stack_r = []
m = int(sys.stdin.readline())

for _ in range(m):
    n = sys.stdin.readline().rstrip().split()
    if n[0] == 'L':
        # 커서 왼쪽으로 옮기기 -> stack_l에서 stack_r로 pop
        if stack_l: # 비어있지 않다면
            stack_r.append(stack_l.pop())
        # else일 때 continue안해도 되겠지?
    elif n[0] == 'D':
        # 커서 오른쪽으로 옮기기 -> stack_r에서 stack_l로 pop
        if stack_r:
            stack_l.append(stack_r.pop())
    elif n[0] == 'B':
        # 커서 왼쪽 문자 삭제 -> stack_l에서 pop
        if stack_l:
            stack_l.pop()
    elif n[0] == 'P':
        # n[1]을 커서 왼쪽에 추가 -> stack_l에 append
        stack_l.append(n[1])

stack_r.reverse()
stack = stack_l + stack_r
print(*stack, sep='')