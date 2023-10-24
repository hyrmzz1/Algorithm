import sys

v, e = map(int, sys.stdin.readline().split())
parent = [i for i in range(v + 1)]  # 부모 노드 초기화

# 루트 찾기
def find_parent(parent, x):
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]

# 두 노드에 대해 union => 각각 노드 찾고 
def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a < b:   # b 노드 번호가 a보다 크면
        parent[b] = a   # b의 루트 a로 설정
    else:
        parent[a] = b

edges = []
for _ in range(e):
    a, b, c = map(int, sys.stdin.readline().split())    # a, b: Vertex, c: Weight(Cost)
    edges.append((c, a, b))
edges.sort()    # 간선 데이터 오름차순 정렬 - c 순으로

result = 0
for c,a,b in edges:
    # 사이클 확인 - 사이클 생성되지 않아야 함.
    if find_parent(parent, a) != find_parent(parent, b):    # a와 b의 루트가 같지 않은지
        union_parent(parent, a, b)  # 루트 같지 않으면 집합에 포함
        result += c # 가중치 합

print(result)