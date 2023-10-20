import sys
n = int(sys.stdin.readline().rstrip())
tree = {}   # tree = dict() 으로 초기화 해도 된다.

# 트리 구현 (부모 왼쪽자식 오른쪽자식)
for _ in range(n):
    p, left, right = sys.stdin.readline().rstrip().split()
    tree[p] = [left, right]    # tree = {p: [left, right]} 라고 작성해도 됨.

# 전위 순회 (부모->좌->우)
def preorder(p):
    if p != '.':    # 부모가 존재하면
        print(p, end='')    # 부모 
        preorder(tree[p][0]) # 왼쪽 자식
        preorder(tree[p][1])    # 오른쪽 자식

# 중위 순회 (좌->부모->우)
def inorder(p):
    if p != '.':
        inorder(tree[p][0])
        print(p, end='')
        inorder(tree[p][1])

# 후위 순회(좌->우->부모)
def postorder(p):
    if p != '.':
        postorder(tree[p][0])
        postorder(tree[p][1])
        print(p, end='')

# 얘네 사이에 개행 필요
preorder('A')
print()
inorder('A')
print()
postorder('A')