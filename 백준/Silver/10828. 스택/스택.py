import sys

n = int(sys.stdin.readline().rstrip())  # 명령의 수

# 빈 스택 구현
stack = []

# 입력 처리
for i in range(n):
    # 입력 받고 출력해야하는 명령 주어질 때마다 한줄에 하나씩 출력해야 하니까 command는 for문 내부에서 선언
    command = sys.stdin.readline().split()    #['push', '1']

    if command[0] == "push":
        # 스택 맨 아래에 i[0]을 추가
        stack.append(command[1])
    elif command[0] == "pop":
        # 마지막에 들어온거 삭제하고 그 수를 출력.
        if len(stack) == 0:
            print(-1)
        else:
            print(stack.pop()) # 맨 마지막 요소 리턴하고 해당 요소 삭제
    elif command[0] == "size":
        # 스택 사이즈(들어있는 정수의 개수) 출력
        print(len(stack))
    elif command[0] == "empty":
        # 스택 비었으면 1, 아니면 0 출력.
        if len(stack) == 0:
            print(1)
        else:
            print(0)
    elif command[0] == "top":
        # 스택 가장 위에 있는 정수를 출력
        if len(stack) == 0: # 스택에 들어있는 정수가 없는 경우
            print(-1)
        else:
            print(stack[-1])    # 인덱싱 값 음수로 작성하면 편하다