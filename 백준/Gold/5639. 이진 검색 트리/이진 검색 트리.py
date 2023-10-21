import sys
from bisect import bisect
sys.setrecursionlimit(10 ** 6)

preorder = []
# := 연산자를 이용하면 조건문에서 변수에 값이 할당 된다!
while (case := sys.stdin.readline().strip()):
    case = int(case)
    preorder.append(case)

def postorder(preorder):
    if not preorder: return []
    m = preorder[0]
    i = bisect(preorder, m)

    l = postorder(preorder[1:i])
    r = postorder(preorder[i:])

    return l + r + [m]

result = postorder(preorder)
print(*result, sep='\n')